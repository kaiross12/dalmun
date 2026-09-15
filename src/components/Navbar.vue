<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#" @click.prevent="goToHome" class="logo">
        <img src="/logo.png" alt="Dalmun Logo" class="logo-image" />
      </a>
      <ul class="nav-links desktop-links">
        <li v-for="item in menuItems" :key="item.label">
          <a :href="item.target ?? (item.url ? item.url.toString() : '#')" class="nav-item" @click.prevent="handleNavClick(item)">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <div class="nav-actions">
        <button class="btn-icons" @click="goToReg" aria-label="Register">
          <IconCalendarEvent :size="25" :stroke-width="2" />
        </button>
        <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <IconX v-if="isMenuOpen" :stroke="2" :size="25" />
          <IconMenu2 v-else :stroke="2" :size="25" />
        </button>
      </div>
    </div>
    <div class="mobile-drawer" :class="{ 'drawer-open': isMenuOpen }">
      <ul class="mobile-nav-links">
        <li v-for="item in menuItems" :key="item.label">
          <a :href="item.target ?? (item.url ? item.url.toString() : '#')" class="nav-item" @click.prevent="handleNavClick(item); closeMenu();">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
    <div class="drawer-backdrop" :class="{ 'backdrop-visible': isMenuOpen }" @click="closeMenu"></div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IconMenu2, IconX, IconCalendarEvent } from "@tabler/icons-vue";

const router = useRouter();
const route = useRoute();

type NavItem = {
  label: string;
  i18nKey: string;
  scrollTo?: string;
  target?: string;
  route?: string;
  url?: URL;
};

const menuItems: NavItem[] = [
  { label: "Homepage", i18nKey: "navbar.home", scrollTo: "hero", target: "#hero" },
  { label: "About", i18nKey: "navbar.about", scrollTo: "about", target: "#about" },
  { label: "Registration", i18nKey: "navbar.registration", scrollTo: "registration", target: "#registration" },
  { label: "Gallery", i18nKey: "navbar.gallery", scrollTo: "gallery", target: "#gallery" },
  { label: "FAQ", i18nKey: "navbar.faq", scrollTo: "faq", target: "#faq" },
  { label: "Contact", i18nKey: "navbar.contact", scrollTo: "contact", target: "#contact" }
];

const NAV_OFFSET = 90;
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};

const scrollAfterNavigation = (id: string) => {
  let attempts = 0;
  const tryScroll = () => {
    attempts++;
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (attempts < 20) {
      setTimeout(tryScroll, 100);
    }
  };
  nextTick(() => {
    setTimeout(tryScroll, 50);
  });
};

const handleNavClick = async (item: NavItem) => {
  if (item.scrollTo) {
    if (route.path !== "/") {
      await router.push("/");
      scrollAfterNavigation(item.scrollTo);
    } else {
      scrollToSection(item.scrollTo);
    }
  } else if (item.route) {
    await router.push(item.route);
  } else if (item.url) {
    window.open(item.url.toString(), "_blank", "noopener,noreferrer");
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const goToReg = () => {
  if (route.path === "/") {
    scrollToSection("registration");
  } else {
    router.push("/").then(() => scrollAfterNavigation("registration"));
  }
};

const goToHome = () => {
  if (route.path === "/") {
    scrollToSection("hero");
  } else {
    router.push("/").then(() => scrollAfterNavigation("hero"));
  }
};
</script>

<style scoped>
.navbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; padding: 15px 0; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); font-family: "Inter", sans-serif; pointer-events: none; box-sizing: border-box; }
.nav-container { position: relative; max-width: 1800px; width: calc(100% - 60px); margin: 0 auto; padding: 12px 32px; display: flex; align-items: center; justify-content: space-between; pointer-events: auto; background: transparent; border-radius: 20px; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-sizing: border-box; }
.navbar.scrolled { padding: 10px 0; }
.navbar.scrolled .nav-container { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); background: #ffffff15; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); transform: translateZ(0); will-change: backdrop-filter; }
.logo { display: flex; align-items: center; gap: 12px; text-decoration: none; pointer-events: auto; z-index: 2; }
.logo-image { height: 50px; width: auto; object-fit: contain; display: block; }
.nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; position: absolute; left: 50%; transform: translateX(-50%); transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1); z-index: 1; }
.nav-item { text-decoration: none; padding: 8px; color: #fff; font-weight: 300; font-size: 0.9rem; transition: color 0.2s ease; position: relative; cursor: pointer; font-family: "Poppins", sans-serif; }
.nav-item:hover { color: #d4d4d4; }
.navbar.scrolled .nav-item { color: #000; font-weight: 400; }
.navbar.scrolled .nav-item:hover { color: #333; }
.navbar.scrolled .nav-item::after { background: #000; }
.nav-item::after { content: ""; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background: #d4d4d4; transition: width 0.3s ease; }
.nav-item:hover::after { width: 100%; }
.nav-actions { display: flex; align-items: center; gap: 5px; z-index: 2; }
.btn-icons { width: 50px; height: 50px; padding: 0; margin: 0; display: flex; align-items: center; justify-content: center; background-color: transparent; border: none; color: #fff; cursor: pointer; border-radius: 12px; transition: all 0.3s ease; }
.btn-icons:hover { background: rgba(255, 255, 255, 0.08); transform: translateY(-1px); }
.navbar.scrolled .btn-icons { color: #000; }
.navbar.scrolled .btn-icons:hover { background: rgba(0, 0, 0, 0.08); }
.mobile-toggle { display: none; align-items: center; justify-content: center; width: 42px; height: 42px; padding: 0; border: none; background: transparent; color: #fff; cursor: pointer; z-index: 1001; }
.mobile-toggle svg { display: block; color: #fff; transition: color 0.3s ease; }
.mobile-toggle:hover { background: rgba(255, 255, 255, 0.08); }
.navbar.scrolled .mobile-toggle svg { color: #000; }
.navbar.scrolled .mobile-toggle:hover { background: rgba(0, 0, 0, 0.08); }
.mobile-drawer { display: none; position: fixed; top: 0; right: -100%; width: min(320px, 80vw); height: 100vh; background: #fff; backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); padding: 90px 32px 40px; flex-direction: column; gap: 0; transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12); z-index: 999; pointer-events: auto; transform: translateZ(0); will-change: backdrop-filter; }
.mobile-drawer.drawer-open { right: 0; }
.mobile-nav-links { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.mobile-nav-links .nav-item { font-size: 1.15rem; display: block; padding: 12px 8px; border-bottom: 1px solid rgba(0, 0, 0, 0.06); }
.drawer-backdrop { display: none; position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4); z-index: 998; opacity: 0; pointer-events: none; transition: opacity 0.35s ease; }
.drawer-backdrop.backdrop-visible { opacity: 1; pointer-events: auto; }

@media (max-width: 960px) {
  .desktop-links { display: none; }
  .mobile-toggle { display: flex; }
  .mobile-drawer { display: flex; }
  .drawer-backdrop { display: block; }
  .nav-container { padding: 12px 24px; width: calc(100% - 48px); }
}

@media (max-width: 768px) {
  .navbar { padding: 10px 0; }
  .nav-container { width: calc(100% - 32px); padding: 10px 16px; border-radius: 16px; }
  .logo-image { height: 28px; }
  .mobile-toggle { width: 40px; height: 40px; }
  .btn-icons { width: 36px; height: 36px; }
  .mobile-drawer { width: min(280px, 80vw); padding: 70px 20px 24px; }
}

@media (max-width: 480px) {
  .nav-container { width: calc(100% - 24px); padding: 8px 12px; border-radius: 12px; }
  .logo-image { height: 24px; }
  .mobile-toggle { width: 36px; height: 36px; }
  .nav-actions { gap: 10px; }
  .btn-icons { width: 20px; height: 20px; }
  .mobile-drawer { width: min(260px, 85vw); padding: 60px 16px 20px; }
}

@media (max-width: 360px) {
  .logo-image { height: 22px; }
  .mobile-toggle { width: 32px; height: 32px; }
  .btn-icons { width: 30px; height: 30px; }
  .nav-container { padding: 6px 10px; width: calc(100% - 20px); }
}
</style>