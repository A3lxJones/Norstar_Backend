# Norstar Backend

A TypeScript + Express API backend for the Norstar application, designed to be deployed on Cloudflare Workers with data stored in Cloudflare R2.

## Current Implementation

### Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **CORS**: Enabled for frontend communication
- **Error Handling**: Centralized error handler middleware
- **Logging**: Request logging middleware
- **Port**: 3001 (development)

### Project Structure
```
src/
├── index.ts                 # Entry point (server startup)
├── app.ts                   # Express app configuration
├── controllers/
│   ├── fixturesController.ts  # Fixture CRUD operations
│   └── healthController.ts    # Health check endpoint
├── routes/
│   ├── index.ts            # Main router
│   ├── fixtures.ts         # Fixtures endpoints
│   └── health.ts           # Health check routes
├── middleware/
│   ├── errorHandler.ts     # Global error handling
│   └── logger.ts           # Request logging
├── types/
│   ├── Fixture.ts          # Fixture interface
│   └── index.ts            # Type exports
└── data/
    ├── fixtures.ts         # Mock fixture data
    └── mockData.ts         # Additional mock data
```

### Available Endpoints
- **Health Check**: `GET /api/health` - Returns server status
- **Get Fixtures**: `GET /api/fixtures` - Retrieves all fixtures
- **Create Fixture**: `POST /api/fixtures` - Creates a new fixture
  - Required fields: `opponent`, `date`, `location`

### Data Models
**Fixture**:
```typescript
interface Fixture {
  id: number
  opponent: string
  date: string
  location: string
}
```

## Quick Start

```bash
# Install dependencies
npm install

# Development (with auto-reload)
npm run dev

# Build TypeScript
npm run build

# Production
npm start
```

## Next Steps

### 1. Database Integration (Cloudflare R2)
- [ ] Install Cloudflare SDK packages
- [ ] Implement R2 client initialization
- [ ] Create database service layer for R2 operations
- [ ] Replace in-memory mock data with R2 storage
- [ ] Implement data persistence for fixtures and other entities

### 2. Frontend Integration
- [ ] Update CORS origin to frontend deployment URL (currently `http://localhost:3003`)
- [ ] Implement authentication/authorization (JWT or similar)
- [ ] Add request validation middleware
- [ ] Create comprehensive API documentation (OpenAPI/Swagger)
- [ ] Add input sanitization for security

### 3. API Enhancements
- [ ] Add update fixture endpoint (`PUT /api/fixtures/:id`)
- [ ] Add delete fixture endpoint (`DELETE /api/fixtures/:id`)
- [ ] Add get single fixture endpoint (`GET /api/fixtures/:id`)
- [ ] Implement filtering and pagination for fixtures list
- [ ] Add rate limiting middleware

### 4. Cloudflare Deployment
- [ ] Create `wrangler.toml` configuration
- [ ] Migrate to Cloudflare Workers format
- [ ] Set up environment variables for R2 and API configuration
- [ ] Configure R2 bucket access
- [ ] Deploy using Wrangler CLI

### 5. Additional Features
- [ ] Error handling improvements
- [ ] Comprehensive logging
- [ ] Unit tests and integration tests
- [ ] API versioning strategy

## Environment Variables

Create a `.env` file for development:
```
PORT=3001
NODE_ENV=development
```

How to use environment files

- Copy `.env.example` to `.env` and fill in real values for production secrets.
- Keep `.env` out of version control (add it to `.gitignore`).
- For Cloudflare R2 and Wrangler, set the Cloudflare-specific variables in your deployment environment or in your CI secrets rather than committing them locally.

Example workflow:

```bash
# copy example
cp .env.example .env
# edit .env with your values (do not commit)
npm install
npm run dev
```

## Dependencies

### Production
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

### Development
- `typescript` - TypeScript compiler
- `ts-node` - TypeScript execution
- `nodemon` - File watcher and auto-restart
- Type definitions for Node.js, Express, and CORS
