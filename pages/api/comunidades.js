import { SiteClient } from 'datocms-client';

export default async function recebedorDasRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'ffde34b9772d0781f16f745a31c534';
    const cliente = new SiteClient(TOKEN);

    const registroCriado = await cliente.items.create({
      itemType: '968431', // ID do Model de "Communities" criado pelo dato
      ...request.body,
      // title: 'Comunidade Teste',
      // imageUrl: 'https://github.com/psiubr.png',
      // creatorSlug: 'psiubr',
    });
    response.json({
      dados: 'algum dado qualquer',
      registroCriado: registroCriado,
    });
    return;
  }
  response.status(404).json({
    message: "Ainda não temos uma resposta pro metodo 'GET', somente no POST"
  })
}
