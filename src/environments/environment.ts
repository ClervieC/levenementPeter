export const environment = {
  production: false,
  emailjs: {
    // 1. Créer un compte sur https://www.emailjs.com (gratuit)
    // 2. Ajouter Gmail comme service (connecter levenementpeter@gmail.com)
    // 3. Créer un template avec les variables : {{prenom}}, {{nom}}, {{email}},
    //    {{telephone}}, {{typeEvenement}}, {{dateEvenement}}, {{message}}
    // 4. Copier vos identifiants ci-dessous
    serviceId:  'VOTRE_SERVICE_ID',   // ex: 'service_abc123'
    templateId: 'VOTRE_TEMPLATE_ID', // ex: 'template_xyz456'
    publicKey:  'VOTRE_PUBLIC_KEY',  // ex: 'aBcDeFgHiJkLmNoP'
  }
};
