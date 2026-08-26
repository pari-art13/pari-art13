# Pari Malik — Full Stack Developer Portfolio

Responsive full-stack developer portfolio built for the Quillance Full Stack & Web Development Individual Mini Project.

## Profile
- **Name:** Pari Malik
- **Education:** B.E. Computer Engineering, Rajiv Gandhi Institute of Technology, Mumbai
- **Current:** 3rd Year, 5th Semester
- **Internship:** Full Stack Development Intern, Quillance Infotech Pvt. Ltd. — August 2026 to Present
- **Certification:** B10X AI Tools Certificate
- **Email:** parimalik1305@gmail.com
- **GitHub:** https://github.com/pari-art13/pari-art13
- **LinkedIn:** https://www.linkedin.com/in/pari-malik-a9221b319/

## Technology
Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express.js  
Database: MongoDB Atlas, Mongoose  
Version control: Git, GitHub  
Deployment target: Vercel/Netlify + Render/Railway

## Required Sections
Home, About Me, Technical Skills, Education, Experience, Projects, Certifications, Resume, GitHub, LinkedIn and Contact.

## Run locally
### Backend
```bash
cd backend
npm install
copy .env.example .env
# Add your MongoDB Atlas connection string to .env
npm run dev
```

### Frontend
Use VS Code Live Server for the `frontend` folder or another local static server.

The frontend uses `http://localhost:5000` as the development API base. For production, set `window.PORTFOLIO_API_BASE` to the deployed backend URL.

## Contact API
`POST /api/contact`

Required JSON fields: `name`, `email`, `subject`, `message`

- `201` — message stored successfully
- `400` — validation error
- `503` — database unavailable
- `500` — server error

## Submission evidence to capture after deployment
1. Desktop homepage screenshot
2. Mobile homepage screenshot
3. Contact form filled/submitted
4. Database record showing the submitted message
5. GitHub repository
6. Live frontend URL
7. Live `/health` backend URL

## Security
Never commit `.env`, MongoDB credentials or private keys. `.env.example` contains placeholder names only.

## Required final project name
`Pari_Malik_DeveloperPortfolio`


## Website structure
The portfolio is intentionally built as **4 responsive pages**:
1. `index.html` — Home
2. `about.html` — About Me + Technical Skills
3. `projects.html` — Projects
4. `experience.html` — Education + Experience + Certifications + Contact

No personal photograph is used. The hero uses a PM initials design and a subtle technology-themed background treatment.
