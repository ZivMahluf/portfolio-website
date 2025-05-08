const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const cloudName = Deno.env.get('CLOUDINARY_CLOUD_NAME');
    const apiKey = Deno.env.get('CLOUDINARY_API_KEY');
    const apiSecret = Deno.env.get('CLOUDINARY_API_SECRET');

    if (!cloudName || !apiKey || !apiSecret) {
      throw new Error('Missing Cloudinary credentials');
    }

    const url = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1/${cloudName}/resources/search`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression: 'folder=portfolio',
        max_results: 30,
        sort_by: [{ created_at: 'desc' }],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cloudinary API error:', errorText);
      throw new Error(`Cloudinary API error: ${errorText}`);
    }

    const data = await response.json();
    
    // Randomly select 6 images
    const resources = data.resources || [];
    const shuffled = resources.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 6);
    
    return new Response(
      JSON.stringify({ resources: selected }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error fetching photos:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch photos',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});