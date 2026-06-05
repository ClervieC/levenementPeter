export const environment = {
  production: false,
  emailjs: {
    // 1. Créer un compte sur https://www.emailjs.com (gratuit)
    // 2. Ajouter Gmail comme service (connecter levenementpeter@gmail.com)
    // 3. Créer un template avec les variables : {{prenom}}, {{nom}}, {{email}},
    //    {{telephone}}, {{typeEvenement}}, {{dateEvenement}}, {{message}}
    // 4. Copier vos identifiants ci-dessous
    serviceId:  'VOTRE_SERVICE_ID',   // ex: 'service_abc123'
    templateId: 'template_0gt4hao', // ex: 'template_xyz456'
    publicKey:  'ojuaOjPVg3B6q1oG9',  // ex: 'aBcDeFgHiJkLmNoP'
  }
};
