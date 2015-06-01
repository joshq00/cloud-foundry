import express from 'express';
let app = express();
app.use( express.static( 'public' ) );
app.listen( process.env.VCAP_APP_PORT || process.env.PORT || 3000 );
