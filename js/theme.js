// theme.js — shared page utilities loaded in every page <head>.

// ===== EMAIL OBFUSCATION =====
// Links written as:
//   <a class="email-link" data-email-user="user" data-email-domain="domain">user (at) domain (dot) com</a>
// get a real mailto: href at runtime so the address is not present in the HTML.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a.email-link').forEach(function (a) {
        var user = a.getAttribute('data-email-user');
        var domain = a.getAttribute('data-email-domain');
        if (user && domain) {
            a.setAttribute('href', 'mailto:' + user + '@' + domain);
        }
    });
});
