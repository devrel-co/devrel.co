const applicationKey = '3118f455a4aff47f5b83b0f916f9159dbb22404661ce6ae11fc572018444672a';
const clientKey = 'a0a4a8d4006516baed385a7e3dce8912c1cb7a1a3e7b7ddb05d35819655ffdea';
const ncmb = new NCMB(applicationKey, clientKey);

$(() => {
  $('form#contact').on('submit', async (e) => {
    e.preventDefault();
    try {
      const params = $(e.target).serializeArray();
      const Contact = ncmb.DataStore('Contact');
      const contact = new Contact;
      for (const key of params) {
        contact.set(key.name, key.value)
      }
      const acl = new ncmb.Acl;
      acl.setRoleReadAccess('Admin', true);
      contact.set('acl', acl);
      await contact.save();
      ncmb
        .Script
        .data({objectId: contact.objectId})
        .exec('POST', 'mail_en.js');
      $('#mauticform_devrelwenihewase_message').html('Thank you for your contact. We\'ll reply it soon.');
    } catch (e) {
      console.error(e);
    }
  });
})
