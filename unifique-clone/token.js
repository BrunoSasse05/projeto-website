function getUrlBase(port) {

    // curl 'https://cttiveckeuotqnifflit.supabase.co/rest/v1/countries?select=*' \
    // -H "apikey: SUPABASE_KEY" \
    // -H "Authorization: Bearer SUPABASE_KEY"

     return "https://cttiveckeuotqnifflit.supabase.co/rest/v1/" + port + "select=*";
    }

    function getTokenSupabase() {

        //Bruno
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dGl2ZWNrZXVvdHFuaWZmbGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc5MjYxOTQsImV4cCI6MTk4MzUwMjE5NH0.5Fbf87O1Rqr-YqH0zX60X996xPSrQn2vFEpHiUqXLMY";

        // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkY3N6cXZ2cndkcWNuanZjb3h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyNTUxNTUsImV4cCI6MTk3NTgzMTE1NX0.U-3HSFgKo9ydTnKrpQsx5ytrBcLSpGwzVn6LqNwn14E";
    }