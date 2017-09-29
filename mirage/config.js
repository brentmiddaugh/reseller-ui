export default function() {
  this.namespace = 'api';

  this.post('/user/session', () => {
    return {
      email: 'john.doe@example.org',
      token: 'this.really.is.a.secure.token'
    };
  });
}
