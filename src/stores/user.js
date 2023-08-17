import { defineStore } from 'pinia'
import { auth, userCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),

  actions: {
    async registerUser(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      if (userCred && userCred.user && userCred.user.uid) {
        await userCollection.doc(userCred.user.uid).set({
          name: values.name,
          email: values.email,
          age: values.age,
          country: values.country
        })
      }
      this.userLoggedIn = true
      console.log({ userCred })
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },

    async sigOut() {
      await auth.signOut()
      this.userLoggedIn = false
    }
  }
})
