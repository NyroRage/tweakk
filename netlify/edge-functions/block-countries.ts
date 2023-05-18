export default async function geoBlock(req, { geo }) {



    if (geo.country.code === 'PK' || geo.country.code === 'IN') {
      return new Response(`We're not Available`, {
        headers: { 'content-type': 'text/html' },
        status: 451
      });
    }


  }