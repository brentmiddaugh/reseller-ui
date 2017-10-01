import { Response, faker } from 'ember-cli-mirage';

export default function() {
  this.namespace = 'api';

  this.post('/user/session', (schema, request) => {
    const params = JSON.parse(request.requestBody);
    const user   = schema.users.findBy({email: params.user.email});

    if( user && user.attrs.password == params.user.password) {
      const token = faker.random.uuid();

      user.update({token: token});

      return {
        id: user.attrs.id,
        email: user.attrs.email,
        token: token
      };
    } else {
      return new Response(401, {}, {errors: 'sorry, not sure who you are'});
    }
  });

  this.get('/users/me', (schema, request) => {
    const auth  = request.requestHeaders['Authorization'].split(',');
    const token = auth[0].split('=')[1].replace(/"/g,'');
    const user  = schema.users.findBy({token: token});

    return {
      data: {
        id: 'me',
        type: 'users',
        attributes: {
          name: user.name,
          email: user.email
        },
        relationships: {
          reseller: {
            data: { id: user.reseller.id, type: 'reseller' }
          }
        }
      },
      included: [
        {
          type: 'reseller',
          id: user.resellerId,
          attributes: {
            name: user.reseller.name,
            status: user.reseller.status
          }
        }
      ]

    };
  });
}
