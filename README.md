### Welcome to the Data TimeOut API!

### This API allows you to easily generate data in time to feed your development phases.

This is an open source project. I need your help for development and updating app.

<center>

# ↘ [WAITMEPLEASE](www.waitmeplease.vercel.app) ↙

## </center>

<center>
🌍 Find me 🌍

🔴 **_[YouTube](https://www.youtube.com/channel/UCjLewh0Q_VY67axa5iG7wng)_**
🔵 **_[LinkedIn](www.linkedin.com/in/corneliusvincent)_**
🟡 **_[TikTok](https://www.tiktok.com/@rocketdata40?_t=8lz8MUcOSsy&_r=1)_**

</center>

---

## Functioning

The API is designed to be simple and intuitive. Here's how to use it:

## error

- [1](e + 200 | 300 | 400 | 404 | 500 ) [1-60]
- `1` is number `required` for `error` api
- _next .._ code error begin for `e` and `code`
- _next ..._ timeOut response between `1` and `60`

**example**

| Request                                                                                    | Function               |
| ------------------------------------------------------------------------------------------ | ---------------------- |
| [https://waitmeplease.vercel.app/api/1e40410](https://waitmeplease.vercel.app/api/1e40410) | Response 404 in 10 sec |
| [https://waitmeplease.vercel.app/api/1e2001](https://waitmeplease.vercel.app/api/1e2001)   | Response 200 in 1 sec  |
| [https://waitmeplease.vercel.app/api/1e30045](https://waitmeplease.vercel.app/api/1e30045) | Response 300 in 45 sec |
| [https://waitmeplease.vercel.app/api/1e40410](https://waitmeplease.vercel.app/api/1e40410) | Response 404 in 10 sec |
| [https://waitmeplease.vercel.app/api/1e5008](https://waitmeplease.vercel.app/api/1e5008)   | Response 500 in 8 sec  |

## String type

type : `persona`, `product`, `time`, `id`

- [1-99] ( type ) [1-60]
- Number `required` for between `1` and `99`
- _next .._ `String` type
- _next ..._ timeOut response between `1` and `60`
- `time` : generate time for `5 ms` intervale

**example time**

_api/10time5 = 10 _ 5 ms + delay 5 sec\*

**example string**

| Request                                                                                          | Function                        |
| ------------------------------------------------------------------------------------------------ | ------------------------------- |
| [https://waitmeplease.vercel.app/api/1persona45](https://waitmeplease.vercel.app/api/1persona45) | Response 1 persona delay 45 sec |
| [https://waitmeplease.vercel.app/api/10product4](https://waitmeplease.vercel.app/api/10product4) | Response 10 product delay 4 sec |

## Return object

### Product :

```json
// api/1product1
{
  "result": [
    {
      "id": 2,
      "nom": "Jeans slim",
      "categorie": "Vêtements",
      "description": "Jeans pour homme ou femme, coupe slim",
      "prix_ht": 39.99,
      "tva": 20
    }
  ]
}
```

### Persona :

```json
// api/1persona1
{
  "result": [
    {
      "prenom": "Carter",
      "nom": "Smith",
      "age": 13,
      "numero": "7680",
      "indicatif": "TER",
      "rue": "Rue de la Gare",
      "cp_france": "35000",
      "cp_eu": "94102",
      "phone": "+33 7 21 43 65 87",
      "astro": "Capricorne",
      "T": "XL",
      "taille": 1.5
    }
  ]
}
```

### Time :

```json
// api/1time1
{
  "result": [
    1714560376267
  ]
}

// api/3time1
{
  "result": [
    1714560389597,
    1714560389601,
    1714560389607
  ]
}
```

### Id :

```json
// api/1id1
{
  "result": [
    "55706f99-e1b2-450a-9e03-16af6e4d7875"
  ]
}

// api/3id1

{
  "result": [
    "180dec64-8420-4b72-9fdf-cad275f022dc",
    "c3cea873-e366-47d1-8c4d-2ae25213b7d2",
    "45a90e56-9842-4756-af4f-49b4b7979dbb"
  ]
}
```

### Error :

```json
// api/1e4001
{
  "status": 400
}
// api/1e4041
{
  "status": 404
}
// api/1e2001
{
  "status": 200
}
// api/1e5001
{
  "status": 500
}
// api/1e3001
{
  "status": 300
}

// default error
{
  "status": 404
}
```

# Contribute

### Possible improvement in no order of importance

| Request                                                          | Function                                                                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Creation of a drop-down home page for the available Type options | Implement a drop-down menu on the homepage displaying available Type options, functioning as an infinite carousel from top to bottom |
| Improvement of each function that generates data                 | Enhance each data generation function to minimize reliance on storing data in JSON format                                            |
| Find a way to put a profile image URL in the dataset             | Incorporate a method to include profile image URLs within the dataset                                                                |
| Make the female first name consistent with gender                | Ensure consistency in female first names throughout the dataset based on gender                                                      |
| Find other data to generate                                      | Explore additional data sources and types to expand the range of data generated                                                      |

<center>

### I look forward to your pull requests.

### If you have any ideas or questions here are my suggestions

---

---

---

🌍 Find me 🌍

🔴 **_[YouTube](https://www.youtube.com/channel/UCjLewh0Q_VY67axa5iG7wng)_**
🔵 **_[LinkedIn](www.linkedin.com/in/corneliusvincent)_**
🟡 **_[TikTok](https://www.tiktok.com/@rocketdata40?_t=8lz8MUcOSsy&_r=1)_**

</center>

---

---

---

# Install React Nextjs 14

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
