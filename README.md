This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### How to run the development server:

```bash
npm run dev
```

### How to run the production server:
```bash
npm start
```

Open [http://localhost:3170](http://localhost:3170) with your browser to see the result.

## App description
There are 2 routes: 
- `/filter`
- `/result/{makeId}/{year}`

Root route `/` redirects to `/filter`

To see the vehicle models, choose _make_ and _year_ from the `filter` page.

## App structure
1. `axios` was used for handing the requests:
   - `lib` folder is the initial facade
   - `services` folder is for sending requests and preparing response data
2. `snackbar-context` was used for error visualization
3. `scss` was used as an additional styling solution besides `tailwind`
4. `usePreloader` custom hook was used for dealing with loading states (as alternative to _Suspense_) 
