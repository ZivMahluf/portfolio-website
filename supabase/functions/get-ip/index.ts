const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    if (!forwardedFor) {
      throw new Error('x-forwarded-for header is missing');
    }

    const publicIp = forwardedFor.split(',')[0].trim() || 'unknown';
    
    return new Response(
      JSON.stringify({ publicIp }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error in get-ip function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to get IP address',
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