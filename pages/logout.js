import nookies from 'nookies';

export default function None() {}
export async function getServerSideProps(ctx) {
  // const cookies = nookies.get(ctx);
  const result = nookies.destroy(ctx, 'USER_TOKEN');
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
}
