
### Assistant changes summary
- Added src/firebase.js with your Firebase config.
- Replaced src/dummyData.js with placeholder.
- Replaced src/context/AppDataContext.jsx to use Firestore realtime listeners and exported CRUD functions for hospitals, doctors, appointments.
- Replaced/created src/context/AuthContext.jsx to use Firebase Auth.
- Attempted to wrap App with AuthProvider and AppDataProvider in src/App.jsx.
- You must review the UI pages (Hospitals.jsx, Dashboard.jsx) to use `useAppData()` and call CRUD functions where create/update/delete are needed.
- Run `npm install` then `npm run dev` to start.

Firestore collections expected (create these or use console):
- hospitals, doctors, appointments

Security and production:
- Configure Firestore security rules to restrict writes to authenticated admin users.
- Consider Cloud Functions for atomic booking logic to avoid double-booking under heavy concurrency.
