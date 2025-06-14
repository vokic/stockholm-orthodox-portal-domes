
# Strapi CMS Configuration

To connect your app to Strapi CMS, you need to set up the following environment variables:

## Environment Variables

Create a `.env` file in your project root with:

```
REACT_APP_STRAPI_URL=https://your-strapi-instance.herokuapp.com
REACT_APP_STRAPI_API_TOKEN=your-api-token-here
```

## Local Development

For local development, use:
```
REACT_APP_STRAPI_URL=http://localhost:1337
```

## Strapi Setup Instructions

1. **Create Strapi Account**
   - Go to https://strapi.io
   - Sign up for a free account
   - Create a new project

2. **Configure Content Types**

   **Articles Content Type:**
   - title (Text, Required)
   - excerpt (Text, Required)
   - content (Rich Text, Required)
   - author (Text, Required)
   - category (Text, Required)
   - imageUrl (Text, Optional)
   - published (Boolean, Default: false)

   **Events Content Type:**
   - name (Text, Required)
   - date (Date, Required)
   - time (Text, Required)
   - type (Enumeration: service, event, slava, Required)
   - description (Text, Optional)
   - location (Text, Optional)

3. **Set Up API Token**
   - Go to Settings > API Tokens
   - Create a new token with read permissions
   - Copy the token to your .env file

4. **Configure Permissions**
   - Go to Settings > Users & Permissions > Roles > Public
   - Enable find and findOne for Articles and Events

5. **Deploy Strapi**
   - Deploy to Heroku, Railway, or other platform
   - Update REACT_APP_STRAPI_URL with your deployed URL

## Fallback Behavior

The app will automatically fall back to static data if Strapi is unavailable, ensuring your site always works.
