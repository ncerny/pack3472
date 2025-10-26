/**
 * Contact Form Handler
 * Provides client-side validation and submission handling for contact form
 */

(function () {
  'use strict';

  // Form validation patterns
  const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\(\)0-9\s\-]+$/,
    name: /^[a-zA-Z\s\-']+$/
  };

  // Error messages
  const errors = {
    required: 'This field is required',
    email: 'Please enter a valid email address',
    phone: 'Please enter a valid phone number',
    name: 'Please enter a valid name'
  };

  /**
   * Validate a form field
   * @param {HTMLElement} field - The input field to validate
   * @returns {boolean} - True if valid, false otherwise
   */
  function validateField(field) {
    const value = field.value.trim();
    const errorEl = document.getElementById(`${field.id}-error`);
    let errorMessage = '';

    // Clear previous error
    if (errorEl) {
      errorEl.textContent = '';
    }
    field.classList.remove('form-control--error');

    // Required field check
    if (field.hasAttribute('required') && !value) {
      errorMessage = errors.required;
    }
    // Email validation
    else if (field.type === 'email' && value && !patterns.email.test(value)) {
      errorMessage = errors.email;
    }
    // Phone validation
    else if (field.type === 'tel' && value && !patterns.phone.test(value)) {
      errorMessage = errors.phone;
    }
    // Name validation
    else if (field.id === 'name' && value && !patterns.name.test(value)) {
      errorMessage = errors.name;
    }

    // Display error if any
    if (errorMessage) {
      if (errorEl) {
        errorEl.textContent = errorMessage;
      }
      field.classList.add('form-control--error');
      return false;
    }

    field.classList.add('form-control--valid');
    return true;
  }

  /**
   * Validate entire form
   * @param {HTMLFormElement} form - The form to validate
   * @returns {boolean} - True if all fields valid, false otherwise
   */
  function validateForm(form) {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Handle form submission
   * @param {Event} event - The submit event
   */
  function submitContactForm(event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    // Hide previous messages
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    // Validate form
    if (!validateForm(form)) {
      // Scroll to first error
      const firstError = form.querySelector('.form-control--error');
      if (firstError) {
        firstError.focus();
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    // Submit form (iframe handles redirect)
    try {
      form.submit();
      
      // Show success message
      successMsg.style.display = 'block';
      successMsg.focus();
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Reset form
      setTimeout(() => {
        form.reset();
        // Remove validation classes
        form.querySelectorAll('.form-control').forEach(field => {
          field.classList.remove('form-control--valid', 'form-control--error');
        });
      }, 500);

    } catch (error) {
      console.error('Form submission error:', error);
      errorMsg.style.display = 'block';
      errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return false;
  }

  /**
   * Initialize contact form
   */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) {
      return; // Form not on this page
    }

    // Add real-time validation on blur
    const fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(field => {
      field.addEventListener('blur', () => {
        if (field.value.trim()) {
          validateField(field);
        }
      });

      // Clear error on focus
      field.addEventListener('focus', () => {
        const errorEl = document.getElementById(`${field.id}-error`);
        if (errorEl) {
          errorEl.textContent = '';
        }
        field.classList.remove('form-control--error');
      });
    });

    // Make submitContactForm available globally for inline handler
    window.submitContactForm = submitContactForm;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }

})();
