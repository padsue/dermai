# DermAI Backend Setup

## Firebase Firestore Integration

This project now includes a backend structure using Firebase Firestore.

### Folder Structure

```
src/api/
├── config/
│   └── firebase.ts          # Firebase configuration
├── services/
│   ├── firestoreService.ts  # Generic Firestore operations
│   ├── authService.ts       # Authentication service
│   └── index.ts             # Specific service classes
├── types/
│   └── index.ts             # TypeScript type definitions
└── index.ts                 # Main API exports
```

### Setup Instructions

1. **Install Firebase SDK**
   ```bash
   npm install firebase
   ```

2. **Configure Environment Variables**
   - Rename `.env.local.rename` to `.env.local`
   - Fill in Firebase project configuration values

### What's Working

Auth Services
- `signIn(email, password)` - Sign in user
- Sign up
- Forgot Password