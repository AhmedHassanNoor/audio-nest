import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alphaSpaces', alphaSpaces)
    defineRule('email', email)
    defineRule('minValue', minValue)
    defineRule('maxValue', maxValue)
    defineRule('passwordMismatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('countryExcluded', excluded)

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          tos: `You must accept the Terms of Service.`,
          min: `The field ${context.field} is too short.`,
          max: `The field ${context.field} is too long.`,
          alphaSpaces: `The field ${context.field} may only contain alphabetical  character.`,
          email: `The field ${context.field} must be valid email`,
          minValue: `The field ${context.field} is too low.`,
          maxValue: `The field ${context.field} is too high.`,
          passwordMismatch: `The passwords don't match.`,
          excluded: `You are not allowed  to use this value for the field ${context.field}.`,
          countryExcluded: `Due to restrictions, we do not accept users from this location.`
        }

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
