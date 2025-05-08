const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const STEAM_API_KEY = Deno.env.get('STEAM_API_KEY');
    if (!STEAM_API_KEY) {
      throw new Error('STEAM_API_KEY environment variable is not set');
    }

    const STEAM_ID = '76561198078283104';
    const apiUrl = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&format=json`;

    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`Steam API responded with status ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    
    if (!data.response) {
      throw new Error('Invalid response format from Steam API');
    }
    
    return new Response(
      JSON.stringify(data.response),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error in get-steam-games function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch Steam games',
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