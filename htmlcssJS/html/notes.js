const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, LevelFormat, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, Header, Footer, TabStopType,
  TabStopPosition
} = require('docx');

const fs = require('fs');

const PURPLE = "5B4DC8";
const PURPLE_LIGHT = "EEEDFE";
const TEAL = "0F6E56";
const TEAL_LIGHT = "E1F5EE";
const CORAL = "993C1D";
const CORAL_LIGHT = "FAECE7";
const AMBER = "854F0B";
const AMBER_LIGHT = "FAEEDA";
const BLUE = "185FA5";
const BLUE_LIGHT = "E6F1FB";
const GRAY_LIGHT = "F1EFE8";
const BORDER_COLOR = "CCCCCC";

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };


function heading1(text, color = PURPLE) {

  return new Paragraph({

    heading: HeadingLevel.HEADING_1,
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, bold: true, size: 36, color, font: "Arial" })]

  });
}

function heading2(text, color = "222222") {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, size: 26, color, font: "Arial" })]
  });
}

function heading3(text, color = TEAL) {
  return new Paragraph({
    spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, bold: true, size: 22, color, font: "Arial" })]
  });
}

function bullet(text, codeText = null) {
  const children = [new TextRun({ text, size: 20, font: "Arial" })];
  if (codeText) {
    children.push(new TextRun({ text: "  " }));
    children.push(new TextRun({ text: codeText, font: "Courier New", size: 18, color: CORAL, bold: true }));
  }
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children
  });
}

function subBullet(text) {
  return new Paragraph({
    numbering: { reference: "subbullets", level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 19, font: "Arial", color: "444444" })]
  });
}

function codeLine(text) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    indent: { left: 720 },
    children: [new TextRun({ text, font: "Courier New", size: 18, color: "1a1a2e" })]
  });
}

function normalText(text) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text, size: 20, font: "Arial" })]
  });
}

function sectionDivider() {
  return new Paragraph({
    spacing: { before: 120, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR } },
    children: []
  });
}

function colorBox(label, color, lightColor) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: 9360, type: WidthType.DXA },
            shading: { fill: lightColor, type: ShadingType.CLEAR },
            margins: { top: 80, bottom: 80, left: 200, right: 200 },
            children: [new Paragraph({
              children: [new TextRun({ text: label, bold: true, size: 22, color, font: "Arial" })]
            })]
          })
        ]
      })
    ]
  });
}

function spacer() {
  return new Paragraph({ spacing: { after: 120 }, children: [] });
}

function twoColTable(rows, headerRow = null) {
  const tableRows = [];
  if (headerRow) {
    tableRows.push(new TableRow({
      children: headerRow.map((cell, i) => new TableCell({
        borders,
        width: { size: i === 0 ? 3000 : 6360, type: WidthType.DXA },
        shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: cell, bold: true, size: 19, font: "Arial" })] })]
      }))
    }));
  }
  rows.forEach(([col1, col2]) => {
    tableRows.push(new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: 3000, type: WidthType.DXA },
          shading: { fill: "F9F9F9", type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: col1, bold: true, size: 18, font: "Courier New", color: CORAL })] })]
        }),
        new TableCell({
          borders,
          width: { size: 6360, type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: col2, size: 18, font: "Arial" })] })]
        })
      ]
    }));
  });
  return new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: [3000, 6360], rows: tableRows });
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } }, run: { color: PURPLE } }
        }]
      },
      {
        reference: "subbullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "◦", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } }
        }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: PURPLE, space: 1 } },
          children: [
            new TextRun({ text: "MERN Stack — Exam Notes", bold: true, size: 20, color: PURPLE, font: "Arial" }),
            new TextRun({ text: "   |   MongoDB • Express • React • Node.js", size: 18, color: "888888", font: "Arial" })
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_COLOR, space: 1 } },
          children: [
            new TextRun({ children: ["Page ", PageNumber.CURRENT, " of ", PageNumber.TOTAL_PAGES], size: 18, color: "888888", font: "Arial" })
          ]
        })]
      })
    },
    children: [

      // ─── COVER ───────────────────────────────────────────────────────────────
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 600, after: 200 },
        children: [new TextRun({ text: "MERN Stack", bold: true, size: 64, color: PURPLE, font: "Arial" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 160 },
        children: [new TextRun({ text: "Complete Exam Notes", size: 36, color: "555555", font: "Arial" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [new TextRun({ text: "MongoDB  •  Express.js  •  React  •  Node.js", size: 24, color: "888888", font: "Arial" })]
      }),
      new Paragraph({
        children: [new PageBreak()]
      }),

      // ─── SECTION 1: MONGODB ──────────────────────────────────────────────────
      heading1("1. MongoDB", PURPLE),
      sectionDivider(),

      heading2("1.1 Core Concepts"),
      bullet("NoSQL document-oriented database — stores data as BSON (Binary JSON)"),
      bullet("Collections (≈ tables) → Documents (≈ rows) → Fields (≈ columns)"),
      bullet("_id field auto-generated as unique ObjectId"),
      bullet("Schema-less: documents in the same collection can have different fields"),
      bullet("Default port: 27017"),
      spacer(),

      heading2("1.2 CRUD Operations"),
      twoColTable([
        ["insertOne({})", "Insert a single document"],
        ["insertMany([])", "Insert multiple documents"],
        ["find({})", "Read — returns all matching docs (cursor)"],
        ["findOne({})", "Read — returns first matching document"],
        ["updateOne({filter},{$set})", "Update first matching document"],
        ["updateMany({filter},{$set})", "Update all matching documents"],
        ["deleteOne({})", "Delete first matching document"],
        ["deleteMany({})", "Delete all matching documents"],
        ["replaceOne()", "Replace entire document (except _id)"],
      ], ["Method", "Description"]),
      spacer(),

      heading2("1.3 Query Operators"),
      heading3("Comparison"),
      twoColTable([
        ["$eq / $ne", "Equal / Not equal"],
        ["$gt / $lt", "Greater than / Less than"],
        ["$gte / $lte", "Greater or equal / Less or equal"],
        ["$in / $nin", "Value in array / Not in array"],
      ]),
      spacer(),
      heading3("Logical"),
      twoColTable([
        ["$and", "All conditions must match"],
        ["$or", "Any condition must match"],
        ["$not", "Inverts condition"],
        ["$nor", "None of the conditions match"],
      ]),
      spacer(),
      heading3("Update Operators"),
      twoColTable([
        ["$set", "Set a field value"],
        ["$unset", "Remove a field"],
        ["$inc", "Increment a numeric field"],
        ["$push / $pull", "Add/remove item from array"],
        ["$addToSet", "Add to array only if unique"],
      ]),
      spacer(),

      heading2("1.4 Aggregation Pipeline"),
      bullet("Sequence of stages that transform documents"),
      bullet("$match — filter documents (like WHERE)"),
      bullet("$group — group and aggregate (like GROUP BY)"),
      bullet("$sort — sort results"),
      bullet("$project — include/exclude/rename fields"),
      bullet("$limit / $skip — pagination"),
      bullet("$lookup — join with another collection (like SQL JOIN)"),
      spacer(),
      codeLine("db.orders.aggregate(["),
      codeLine("  { $match: { status: 'completed' } },"),
      codeLine("  { $group: { _id: '$userId', total: { $sum: '$amount' } } },"),
      codeLine("  { $sort: { total: -1 } }"),
      codeLine("])"),
      spacer(),

      heading2("1.5 Mongoose (ODM)"),
      bullet("Object Data Modeling library for MongoDB + Node.js"),
      bullet("Defines Schemas that map to MongoDB collections"),
      spacer(),
      heading3("Schema → Model → Query pattern"),
      codeLine("const userSchema = new mongoose.Schema({"),
      codeLine("  name: { type: String, required: true },"),
      codeLine("  email: { type: String, unique: true },"),
      codeLine("  age: { type: Number, min: 0, max: 120 },"),
      codeLine("  createdAt: { type: Date, default: Date.now }"),
      codeLine("});"),
      codeLine("const User = mongoose.model('User', userSchema);"),
      spacer(),
      heading3("Populate (joins)"),
      codeLine("// In schema: author: { type: ObjectId, ref: 'User' }"),
      codeLine("Post.find().populate('author', 'name email')"),
      spacer(),
      heading3("Middleware hooks"),
      bullet("pre('save') — runs before saving a document"),
      bullet("post('find') — runs after a find query"),
      bullet("Use case: hash password before saving"),
      spacer(),
      heading3("Mongoose Validation"),
      bullet("required: true / false"),
      bullet("unique: true"),
      bullet("minlength / maxlength (strings)"),
      bullet("min / max (numbers)"),
      bullet("enum: ['admin', 'user'] (allowed values)"),
      bullet("custom: validate: { validator: fn, message: '...' }"),
      spacer(),
      new Paragraph({ children: [new PageBreak()] }),

      // ─── SECTION 2: EXPRESS ──────────────────────────────────────────────────
      heading1("2. Express.js", TEAL),
      sectionDivider(),

      heading2("2.1 Basics"),
      bullet("Minimal, unopinionated Node.js web framework"),
      bullet("Used to build REST APIs and web servers"),
      codeLine("const express = require('express');"),
      codeLine("const app = express();"),
      codeLine("app.use(express.json()); // parse JSON body"),
      codeLine("app.listen(5000, () => console.log('Server running'));"),
      spacer(),

      heading2("2.2 HTTP Methods & Routing"),
      twoColTable([
        ["app.get('/path', fn)", "Read resource(s)"],
        ["app.post('/path', fn)", "Create resource"],
        ["app.put('/path/:id', fn)", "Replace resource (full update)"],
        ["app.patch('/path/:id', fn)", "Partial update"],
        ["app.delete('/path/:id', fn)", "Delete resource"],
      ], ["Route", "Purpose"]),
      spacer(),
      heading3("Request data"),
      bullet("Route params:  /users/:id  →  req.params.id"),
      bullet("Query string:  /search?q=hi  →  req.query.q"),
      bullet("Body data:  req.body  (needs express.json() middleware)"),
      bullet("Headers:  req.headers['authorization']"),
      spacer(),

      heading2("2.3 Middleware"),
      bullet("Functions with signature: (req, res, next)"),
      bullet("Must call next() to pass control to next middleware"),
      bullet("Order matters — executes top to bottom"),
      spacer(),
      heading3("Built-in middleware"),
      bullet("express.json() — parse JSON request bodies"),
      bullet("express.urlencoded() — parse form data"),
      bullet("express.static('public') — serve static files"),
      spacer(),
      heading3("Third-party middleware"),
      bullet("cors — enable Cross-Origin Resource Sharing"),
      bullet("morgan — HTTP request logger"),
      bullet("helmet — sets secure HTTP headers"),
      bullet("multer — file uploads"),
      bullet("express-rate-limit — prevent brute force attacks"),
      spacer(),
      heading3("Error-handling middleware (4 params)"),
      codeLine("app.use((err, req, res, next) => {"),
      codeLine("  console.error(err.stack);"),
      codeLine("  res.status(500).json({ message: err.message });"),
      codeLine("});"),
      spacer(),

      heading2("2.4 REST API — HTTP Status Codes"),
      twoColTable([
        ["200 OK", "Request succeeded"],
        ["201 Created", "Resource successfully created"],
        ["204 No Content", "Success but no body (DELETE)"],
        ["400 Bad Request", "Invalid input from client"],
        ["401 Unauthorized", "Authentication required"],
        ["403 Forbidden", "Authenticated but no permission"],
        ["404 Not Found", "Resource does not exist"],
        ["409 Conflict", "Duplicate / conflict (e.g. email exists)"],
        ["422 Unprocessable", "Validation failed"],
        ["500 Internal Server Error", "Server-side bug"],
      ], ["Code", "Meaning"]),
      spacer(),

      heading2("2.5 Router — Modular Routes"),
      codeLine("// routes/userRoutes.js"),
      codeLine("const router = express.Router();"),
      codeLine("router.get('/', getAllUsers);"),
      codeLine("router.get('/:id', getUserById);"),
      codeLine("router.post('/', createUser);"),
      codeLine("module.exports = router;"),
      codeLine(""),
      codeLine("// In app.js"),
      codeLine("app.use('/api/users', require('./routes/userRoutes'));"),
      spacer(),
      new Paragraph({ children: [new PageBreak()] }),

      // ─── SECTION 3: REACT ─────────────────────────────────────────────────────
      heading1("3. React", BLUE),
      sectionDivider(),

      heading2("3.1 Core Concepts"),
      bullet("Component-based UI library by Meta"),
      bullet("Virtual DOM — React diffs lightweight copy before updating real DOM (better performance)"),
      bullet("Unidirectional data flow — data flows parent → child via props"),
      bullet("JSX — HTML-like syntax compiled to React.createElement()"),
      spacer(),

      heading2("3.2 Components"),
      heading3("Functional Component (preferred)"),
      codeLine("function Welcome({ name }) {"),
      codeLine("  return <h1>Hello, {name}</h1>;"),
      codeLine("}"),
      spacer(),
      heading3("Class Component (legacy)"),
      codeLine("class Welcome extends React.Component {"),
      codeLine("  render() { return <h1>Hello, {this.props.name}</h1>; }"),
      codeLine("}"),
      spacer(),
      bullet("Props — read-only data passed from parent to child"),
      bullet("Keys — required in lists; help React identify changed items"),
      bullet("Children — content between component tags: props.children"),
      spacer(),

      heading2("3.3 Hooks (Most Important for Exam)"),
      twoColTable([
        ["useState", "Local state — triggers re-render when updated"],
        ["useEffect", "Side effects: fetch, timers, DOM manipulation"],
        ["useContext", "Consume Context without prop drilling"],
        ["useRef", "Mutable ref — does NOT trigger re-render"],
        ["useMemo", "Memoize expensive computed value"],
        ["useCallback", "Memoize function — prevents re-creation"],
        ["useReducer", "Complex state logic — alternative to useState"],
      ], ["Hook", "Purpose"]),
      spacer(),
      heading3("useState"),
      codeLine("const [count, setCount] = useState(0);"),
      codeLine("setCount(prev => prev + 1); // functional update"),
      spacer(),
      heading3("useEffect — Dependency Array Rules"),
      bullet("No dependency array — runs after every render"),
      bullet("Empty array [] — runs only once (on mount)"),
      bullet("[dep1, dep2] — runs when dep1 or dep2 changes"),
      bullet("Return cleanup function — runs on unmount"),
      codeLine("useEffect(() => {"),
      codeLine("  const id = setInterval(fn, 1000);"),
      codeLine("  return () => clearInterval(id); // cleanup"),
      codeLine("}, []);"),
      spacer(),
      heading3("Rules of Hooks"),
      bullet("Only call hooks at the TOP LEVEL (not inside loops/conditions)"),
      bullet("Only call hooks inside React functions (not regular JS functions)"),
      spacer(),

      heading2("3.4 State Management"),
      heading3("Lifting State Up"),
      bullet("Move shared state to the closest common parent"),
      bullet("Pass state down as props, pass setter functions down as callbacks"),
      spacer(),
      heading3("Context API"),
      codeLine("const ThemeContext = createContext('light');"),
      codeLine("// Provider: <ThemeContext.Provider value='dark'>"),
      codeLine("// Consumer: const theme = useContext(ThemeContext);"),
      spacer(),
      heading3("Redux (Advanced)"),
      bullet("Actions — plain objects describing what happened"),
      bullet("Reducer — pure function: (state, action) => newState"),
      bullet("Store — holds global state"),
      bullet("useSelector — read state from store"),
      bullet("useDispatch — dispatch actions to store"),
      spacer(),
      heading3("Controlled vs Uncontrolled Components"),
      bullet("Controlled — React state drives input value (recommended)"),
      bullet("Uncontrolled — DOM itself stores the value (use useRef)"),
      spacer(),

      heading2("3.5 React Router v6"),
      codeLine("<BrowserRouter>"),
      codeLine("  <Routes>"),
      codeLine("    <Route path='/' element={<Home />} />"),
      codeLine("    <Route path='/users/:id' element={<UserProfile />} />"),
      codeLine("    <Route path='*' element={<NotFound />} />"),
      codeLine("  </Routes>"),
      codeLine("</BrowserRouter>"),
      spacer(),
      twoColTable([
        ["useParams()", "Get URL params: const { id } = useParams()"],
        ["useNavigate()", "Redirect: navigate('/home')"],
        ["useLocation()", "Get current location object"],
        ["<Link to='/'>", "Navigate without page reload"],
        ["<NavLink>", "Link with active class support"],
        ["<Outlet />", "Render nested routes"],
      ], ["Hook / Component", "Use"]),
      spacer(),

      heading2("3.6 Component Lifecycle (useEffect equivalents)"),
      twoColTable([
        ["componentDidMount", "useEffect(() => {...}, [])"],
        ["componentDidUpdate", "useEffect(() => {...}, [dep])"],
        ["componentWillUnmount", "useEffect(() => { return () => cleanup() }, [])"],
        ["shouldComponentUpdate", "React.memo / useMemo"],
      ], ["Class Method", "Hook Equivalent"]),
      spacer(),
      new Paragraph({ children: [new PageBreak()] }),

      // ─── SECTION 4: NODE.JS ──────────────────────────────────────────────────
      heading1("4. Node.js", AMBER),
      sectionDivider(),

      heading2("4.1 Fundamentals"),
      bullet("JavaScript runtime built on Chrome's V8 engine"),
      bullet("Non-blocking, event-driven I/O — ideal for scalable APIs"),
      bullet("Single-threaded — uses event loop to handle concurrency"),
      bullet("CommonJS modules: require() / module.exports"),
      bullet("ES Modules: import / export (with .mjs or \"type\": \"module\" in package.json)"),
      spacer(),

      heading2("4.2 Core Modules"),
      twoColTable([
        ["fs", "File system — read/write files"],
        ["path", "File paths — path.join(), path.resolve()"],
        ["http", "Create HTTP servers without Express"],
        ["os", "OS info — os.platform(), os.cpus()"],
        ["events", "EventEmitter class for custom events"],
        ["crypto", "Hashing, encryption, random bytes"],
        ["process", "process.env, process.exit(), process.argv"],
      ], ["Module", "Purpose"]),
      spacer(),

      heading2("4.3 Async Programming"),
      heading3("Callbacks → Promises → Async/Await evolution"),
      bullet("Callbacks — original Node.js pattern (can cause 'callback hell')"),
      bullet("Promises — .then().catch().finally() chain"),
      bullet("async/await — syntactic sugar over Promises (recommended)"),
      spacer(),
      heading3("async/await"),
      codeLine("async function fetchUser(id) {"),
      codeLine("  try {"),
      codeLine("    const user = await User.findById(id);"),
      codeLine("    return user;"),
      codeLine("  } catch (err) {"),
      codeLine("    throw new Error('User not found');"),
      codeLine("  }"),
      codeLine("}"),
      spacer(),
      heading3("Promise.all — concurrent requests"),
      codeLine("const [users, posts] = await Promise.all(["),
      codeLine("  User.find(),"),
      codeLine("  Post.find()"),
      codeLine("]);"),
      spacer(),
      heading3("Event Loop Order"),
      bullet("Call Stack (synchronous code)"),
      bullet("Web APIs / Node APIs (setTimeout, I/O)"),
      bullet("Microtask Queue — Promises (.then) — runs BEFORE callbacks"),
      bullet("Callback Queue — setTimeout, setInterval"),
      spacer(),

      heading2("4.4 NPM & Package Management"),
      twoColTable([
        ["npm init -y", "Create package.json with defaults"],
        ["npm install <pkg>", "Install & add to dependencies"],
        ["npm install -D <pkg>", "Install as devDependency"],
        ["npm run <script>", "Run script from package.json"],
        ["npx <cmd>", "Execute package without installing globally"],
        ["npm update", "Update all packages"],
      ], ["Command", "Purpose"]),
      spacer(),
      heading3("package.json key fields"),
      bullet("dependencies — required in production"),
      bullet("devDependencies — only in development (testing, build tools)"),
      bullet("scripts — npm run dev, npm start, npm test"),
      bullet("main — entry point file"),
      spacer(),
      heading3("Environment Variables"),
      bullet("Stored in .env file (never commit to git!)"),
      bullet("Access via process.env.VARIABLE_NAME"),
      bullet("Load with: require('dotenv').config()"),
      spacer(),
      new Paragraph({ children: [new PageBreak()] }),

      // ─── SECTION 5: FULL-STACK ───────────────────────────────────────────────
      heading1("5. Full-Stack MERN", CORAL),
      sectionDivider(),

      heading2("5.1 Authentication — JWT"),
      bullet("JWT = JSON Web Token — stateless, self-contained auth"),
      bullet("Structure: Header.Payload.Signature (base64 encoded)"),
      bullet("Payload contains: userId, role, expiry (iat, exp)"),
      spacer(),
      heading3("JWT Auth Flow"),
      bullet("1. User submits email + password"),
      bullet("2. Server verifies, hashes password with bcrypt.compare()"),
      bullet("3. Server signs JWT with secret key — jwt.sign(payload, secret, {expiresIn})"),
      bullet("4. Client stores token (localStorage or httpOnly cookie)"),
      bullet("5. Client sends token in: Authorization: Bearer <token>"),
      bullet("6. Middleware verifies: jwt.verify(token, secret)"),
      spacer(),
      heading3("Password Security"),
      codeLine("// Hashing (on register)"),
      codeLine("const hashed = await bcrypt.hash(password, 10); // saltRounds=10"),
      codeLine(""),
      codeLine("// Verifying (on login)"),
      codeLine("const match = await bcrypt.compare(password, hashed);"),
      spacer(),

      heading2("5.2 CORS"),
      bullet("Cross-Origin Resource Sharing — browser security policy"),
      bullet("Backend must allow requests from frontend origin"),
      codeLine("const cors = require('cors');"),
      codeLine("app.use(cors({ origin: 'http://localhost:3000' }));"),
      spacer(),

      heading2("5.3 Project Architecture (MVC)"),
      twoColTable([
        ["models/", "Mongoose schemas & models (M)"],
        ["controllers/", "Business logic functions (C)"],
        ["routes/", "Express router files (V mapping)"],
        ["middleware/", "Auth, error, validation middleware"],
        ["config/", "DB connection, env config"],
        ["client/", "React frontend (Create React App)"],
      ], ["Folder", "Purpose"]),
      spacer(),

      heading2("5.4 React ↔ Express API Integration"),
      bullet("Use axios or fetch() in React to call Express API"),
      bullet("Development proxy: add to client/package.json:"),
      codeLine('  "proxy": "http://localhost:5000"'),
      bullet("Production: set REACT_APP_API_URL env variable"),
      spacer(),
      heading3("API call with axios"),
      codeLine("import axios from 'axios';"),
      codeLine("const { data } = await axios.get('/api/users', {"),
      codeLine("  headers: { Authorization: `Bearer ${token}` }"),
      codeLine("});"),
      spacer(),

      heading2("5.5 Security Best Practices"),
      bullet("Input validation: express-validator or joi"),
      bullet("Helmet.js: sets Content-Security-Policy, X-Frame-Options headers"),
      bullet("Rate limiting: express-rate-limit — blocks too many requests"),
      bullet("Never store plain-text passwords — always bcrypt"),
      bullet("Add .env to .gitignore — never commit secrets"),
      bullet("Use HTTPS in production"),
      bullet("Sanitize inputs to prevent NoSQL injection"),
      spacer(),

      heading2("5.6 Deployment"),
      twoColTable([
        ["MongoDB Atlas", "Managed cloud MongoDB database"],
        ["Render / Railway", "Backend Node/Express hosting (free tier)"],
        ["Vercel / Netlify", "Frontend React hosting (free tier)"],
        ["Heroku", "Full-stack deployment option"],
        [".env (prod)", "Set env vars in host dashboard, not files"],
      ], ["Service", "Use"]),
      spacer(),
      new Paragraph({ children: [new PageBreak()] }),

      // ─── QUICK REFERENCE ─────────────────────────────────────────────────────
      heading1("6. Quick Reference Cheatsheet", "555555"),
      sectionDivider(),

      heading2("Common Packages"),
      twoColTable([
        ["express", "Web framework"],
        ["mongoose", "MongoDB ODM"],
        ["bcryptjs", "Password hashing"],
        ["jsonwebtoken", "JWT sign/verify"],
        ["cors", "Enable CORS"],
        ["dotenv", "Load .env variables"],
        ["axios", "HTTP client (React)"],
        ["react-router-dom", "Client-side routing"],
        ["express-validator", "Request validation"],
        ["helmet", "Security headers"],
        ["morgan", "Request logging"],
        ["nodemon", "Auto-restart server in dev"],
      ], ["Package", "Purpose"]),
      spacer(),

      heading2("Exam Hot Topics"),
      colorBox("MongoDB: CRUD methods, Mongoose schema, populate(), aggregation pipeline, query operators", PURPLE, PURPLE_LIGHT),
      spacer(),
      colorBox("Express: Middleware order, error middleware (4 params), Router, REST status codes", TEAL, TEAL_LIGHT),
      spacer(),
      colorBox("React: useState vs useEffect, dependency array, lifting state, Context API, React Router hooks", BLUE, BLUE_LIGHT),
      spacer(),
      colorBox("Node.js: Event loop order, async/await, Promise.all(), process.env, CommonJS vs ESM", AMBER, AMBER_LIGHT),
      spacer(),
      colorBox("Full-stack: JWT flow, bcrypt, CORS, MVC structure, deployment stack", CORAL, CORAL_LIGHT),
      spacer(),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/user-data/outputs/MERN_Stack_Notes.docx', buffer);
  console.log('Done!');
});
Done

