/*!
 * config
 */

module.exports = {
    port: 3000,
    client_id: 'YOUR_APP_ID',
    client_secret: 'YOUR_APP_SECRET',
    scope: 'publish_actions',
    cookies: 'datr=YOUR_COOKIE; lu=YOUR_COOKIE; ...; act=YOUR_COOKIE; presence=YOUR_COOKIE', // put all of your cookies here
    req_params: '__user=...&...' // read README.md
};