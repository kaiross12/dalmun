<template>
  <section class="registration-section" id="registration">
    <div class="registration-header">
        <h2 class="registration-title">Registration</h2>
        <div class="title-divider"></div>
        <p class="subtitle" v-if="!isStepOneCompleted">Lütfen kayıt seçeneklerini görmek için bilgilerinizi girin.</p>
        <p class="subtitle" v-else>Please choose the option that best suits you.</p>
    </div>

    
    <div class="step-one-wrapper" v-if="!isStepOneCompleted">
      <div class="input-group">
        <input type="text" v-model="firstName" class="form-input" placeholder="Adınız" />
        <input type="text" v-model="lastName" class="form-input" placeholder="Soyadınız" />
      </div>

      <label class="option-label kvkk-label" :class="{ active: kvkkAccepted }">
        <input type="checkbox" v-model="kvkkAccepted" class="hidden-radio">
        <div class="checkbox-ui">
          <svg v-if="kvkkAccepted" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span class="text">
          <a href="#" @click.prevent="isKvkkModalOpen = true">KVKK Aydınlatma Metni ve Gizlilik Sözleşmesi</a>'ni okudum, onaylıyorum.
        </span>
      </label>

      <MarkdownViewer 
        v-model:isOpen="isKvkkModalOpen" 
        title="KVKK Aydınlatma Metni" 
        :markdownContent="kvkkContent" 
      />

      <button 
        class="continue-btn" 
        :disabled="!isFormValid || isLoading" 
        @click="saveAndContinue"
      >
        <span v-if="isLoading">Kaydediliyor...</span>
        <span v-else>Devam Et</span>
      </button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>

    
    <div class="options-wrapper" v-else>
      <div class="option-container">
        <label class="option-label" :class="{ active: selectedOption === 'student' }">
          <input type="radio" value="student" v-model="selectedOption" class="hidden-radio">
          <div class="checkbox-ui">
            <svg v-if="selectedOption === 'student'" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span class="text">I am a student of Düvenciler Anadolu Lisesi</span>
        </label>
        
        <div class="underline"></div>

        <div class="form-dropdown" :class="{ show: selectedOption === 'student' }">
          <div class="form-inner">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeS4QBenlK8n87shKZnPLVP5ZJhFr4WKY9RZ-GiOLI4nRgE8A/viewform?embedded=true" 
              class="google-form-iframe"
              frameborder="0" 
              marginheight="0" 
              marginwidth="0">
              Yükleniyor…
            </iframe>
          </div>
        </div>
      </div>

      <div class="option-container">
        <label class="option-label" :class="{ active: selectedOption === 'non-student' }">
          <input type="radio" value="non-student" v-model="selectedOption" class="hidden-radio">
          <div class="checkbox-ui">
            <svg v-if="selectedOption === 'non-student'" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span class="text">I am not a student of Düvenciler Anadolu Lisesi</span>
        </label>
        
        <div class="underline"></div>

        <div class="form-dropdown" :class="{ show: selectedOption === 'non-student' }">
          <div class="form-inner">
            <div class="external-link-container">
               <p class="external-link-text">
                  Please fill out <a href="https://forms.gle/hjEgmzQbNNEAvSMk9" target="_blank" rel="noopener noreferrer" class="external-link">this form</a> to register.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'
import MarkdownViewer from './MarkdownViewer.vue'

const supabaseUrl = 'https://jyispqvveedxjsfkjsuc.supabase.co'
const supabaseKey = 'sb_publishable_TEF36XIfs12u-MH0EKmk9A_In2Y333H'
const supabase = createClient(supabaseUrl, supabaseKey)

const firstName = ref('')
const lastName = ref('')
const kvkkAccepted = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')
const isStepOneCompleted = ref(false)

const isKvkkModalOpen = ref(false)
const kvkkContent = ref('Yükleniyor...')

onMounted(async () => {
  firstName.value = localStorage.getItem('reg_firstName') || ''
  lastName.value = localStorage.getItem('reg_lastName') || ''
  kvkkAccepted.value = localStorage.getItem('reg_kvkkAccepted') === 'true'

  try {
    const response = await fetch('/kvkk.md')
    if (response.ok) {
      kvkkContent.value = await response.text()
    } else {
      kvkkContent.value = 'KVKK metni yüklenemedi. Lütfen daha sonra tekrar deneyin.'
    }
  } catch (error) {
    kvkkContent.value = 'KVKK metni yüklenirken bir hata oluştu.'
  }
})

const selectedOption = ref(null)

watch(firstName, (val) => localStorage.setItem('reg_firstName', val))
watch(lastName, (val) => localStorage.setItem('reg_lastName', val))
watch(kvkkAccepted, (val) => localStorage.setItem('reg_kvkkAccepted', val))


const isFormValid = computed(() => {
  return firstName.value.trim() !== '' && 
         lastName.value.trim() !== '' && 
         kvkkAccepted.value
})


const saveAndContinue = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  errorMessage.value = ''

  try {
    
    
    const { data, error } = await supabase
      .from('registrations') 
      .insert([
        { 
          first_name: firstName.value, 
          last_name: lastName.value, 
          kvkk_accepted: kvkkAccepted.value 
        }
      ])

    if (error) throw error

    
    localStorage.removeItem('reg_firstName')
    localStorage.removeItem('reg_lastName')
    localStorage.removeItem('reg_kvkkAccepted')
    isStepOneCompleted.value = true
  } catch (error) {
    console.error('Supabase Kayıt Hatası:', error.message)
    errorMessage.value = 'Bilgiler kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>

.registration-section {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.registration-header {
    text-align: center;
    margin-bottom: 2rem;
}

.registration-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    font-weight: 700;
    margin:0;
    padding:0;
    color: #1a1a1a;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 0.5rem;
}

.title-divider {
    height: 3px;
    width: 160px;
    background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
    margin: 0 auto 1rem auto;
    border-radius: 2px;
}

.subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  color: #666;
}


.step-one-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fcfcfc;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #eaeaea;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #d4af37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.kvkk-label {
  align-items: flex-start;
}

.kvkk-label .text {
  font-size: 13.5px;
  line-height: 1.4;
  color: #555;
  margin-top: 3px;
}

.kvkk-label .text a {
  color: #d4af37;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.kvkk-label .text a:hover {
  color: #aa771c;
}

.continue-btn {
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  margin-top: 10px;
}

.continue-btn:hover:not(:disabled) {
  background-color: #333;
}

.continue-btn:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}

.error-message {
  color: #d32f2f;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}


.options-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.option-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.option-label {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 10px 0;
  user-select: none;
}

.hidden-radio {
  display: none;
}

.checkbox-ui {
  width: 24px;
  height: 24px;
  min-width: 24px;
  border: 1.5px solid #000;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  background-color: transparent;
}

.option-label.active .checkbox-ui {
  background-color: #000;
  border-color: #000;
}

.checkbox-ui svg {
  width: 16px;
  height: 16px;
}

.text {
  font-size: clamp(14px, 3.5vw, 16px);
  color: #1a1a1a;
  font-weight: 400;
}

.underline {
  height: 1px;
  background-color: #d1d1d1;
  width: calc(100% - 40px);
  margin-left: 40px;
  margin-top: 5px;
}

.form-dropdown {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

.form-dropdown.show {
  grid-template-rows: 1fr;
}

.form-inner {
  overflow: hidden;
  width: 100%;
}

.google-form-iframe {
  width: 100%;
  height: 800px;
  max-height: 80vh;
  margin-top: 20px;
  border-radius: 8px;
}

.external-link-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eee;
  text-align: center;
}

.external-link-text {
  font-size: clamp(14px, 3.5vw, 16px);
  color: #333;
  margin: 0;
}

.external-link {
  color: #d4af37;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.external-link:hover {
  color: #aa771c;
  text-decoration: underline;
}

@media (max-width: 480px) {
  .registration-section {
    padding: 30px 15px;
  }
  
  .option-label {
    gap: 12px;
  }
  
  .underline {
    width: calc(100% - 36px);
    margin-left: 36px;
  }
  
  .google-form-iframe {
    height: 600px;
  }
}
</style>