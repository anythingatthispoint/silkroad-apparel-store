## Welcome

Hello, this is a project made for Web System and Technologies. This is a mock store website that features a seamless experience of purchasing clothes.
The goal of this project is to provide users and customers valuable insight on how an online store such as this works inside and out.

## Getting Started

Please have nodejs installed on your PC before cloning this project!

Run and install the required packages first using:
```bash
npm install
```

After installing the packages, you can run a local development server using one of the commands below.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Additional Setup

After integrating Firebase into our project, some of the functions will currently not work. You need to setup your own firebase config to get it up and working.

### Steps

1. Go to https://console.firebase.google.com/u/1/project/silkroad-apparel/
2. Find the gear icon on the top left.
3. Go to project settings and then scroll down.
4. You should see SDK Setup and configuration. (Make sure it's in npm)
5. Copy everything inside the code box right after `npm install firebase`
6. Make a new file inside the src\app folder and name it `firebase.js`
7. Paste what you copied inside the file
8. Add these lines to what you copied

```bash
// Import the functions you need from the SDKs you need
...
import { getFirestore, Timestamp } from "firebase/firestore";

...

// Initialize Firebase
export const db = getFirestore(app);
```

After adding these lines to the firebase.js file, you are all set.

## Notes

If you encounter any problems during install or running the development server, please contact your leader (me).

*This is made by TIP Students for Web System and Technologies SY 2023 First Semester*