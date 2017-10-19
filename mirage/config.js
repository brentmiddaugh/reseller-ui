import { Response } from 'ember-cli-mirage';

export default function() {
  this.findUser = function(schema, request) {
    const auth  = request.requestHeaders['Authorization'].split(',');
    const token = auth[0].split('=')[1].replace(/"/g,'');
    return schema.users.findBy({token: token});
  };

  this.namespace = 'api';

  this.get('/brands', (schema, request) => {
    const user = this.findUser(schema, request);
    return schema.brands.where({resellerId: user.resellerId});
  });
  this.post('/brands');
  this.get('/brands/:id');
  this.patch('/brands/:id');

  this.post('/user/session', (schema, request) => {
    const params = JSON.parse(request.requestBody);
    const user   = schema.users.findBy({email: params.user.email});

    if( user && user.attrs.password == params.user.password) {
      return {
        id: user.attrs.id,
        email: user.attrs.email,
        token: user.token
      };
    } else {
      return new Response(401, {}, {errors: 'sorry, not sure who you are'});
    }
  });

  this.get('/users/me', (schema, request) => {
    const user = this.findUser(schema, request);

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
