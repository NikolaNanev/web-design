// Lesson data
const lessons = [
    {
        id: 1,
        title: 'HTML Basics',
        content: `<h1>Welcome to HTML!</h1>
<p>HTML is the backbone of web pages.</p>`,
        explanation: 'HTML uses tags to structure content. The <h1> tag creates a main heading.',
        exercise: 'Try creating a paragraph tag!'
    },
    {
        id: 2,
        title: 'Links & Images',
        content: `<a href="#">Click me!</a>
<img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300" alt="Coding" />`,
        explanation: 'Links use <a> tags, images use <img> tags with src and alt attributes.',
        exercise: 'Create a link to your favorite website!'
    },
    {
        id: 3,
        title: 'Lists & Tables',
        content: `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>`,
        explanation: 'Lists help organize content. Use <ul> for unordered and <ol> for ordered lists.',
        exercise: 'Create a table with 2 rows and 2 columns.'
    },
    {
        id: 4,
        title: 'Forms',
        content: `<form>
    <input type="text" placeholder="Enter name">
    <button type="submit">Submit</button>
</form>`,
        explanation: 'Forms collect user input using various input types.',
        exercise: 'Create a form with email and password fields.'
    },
    {
        id: 5,
        title: 'Semantic HTML',
        content: `<header>
    <nav>Navigation</nav>
</header>
<main>Content</main>
<footer>Footer</footer>`,
        explanation: 'Semantic HTML gives meaning to page structure.',
        exercise: 'Structure a simple blog post using semantic tags.'
    },
    {
        id: 6,
        title: 'CSS Selectors',
        content: `.class-name { color: blue; }
#id-name { font-size: 20px; }`,
        explanation: 'CSS selectors target HTML elements for styling.',
        exercise: 'Style all paragraphs to be red and bold.'
    },
    {
        id: 7,
        title: 'Box Model',
        content: `.box {
    margin: 10px;
    padding: 20px;
    border: 1px solid black;
}`,
        explanation: 'The box model defines spacing around elements.',
        exercise: 'Create a box with padding and a border.'
    },
    {
        id: 8,
        title: 'Flexbox',
        content: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
        explanation: 'Flexbox creates flexible layouts.',
        exercise: 'Center three boxes horizontally using flexbox.'
    },
    {
        id: 9,
        title: 'Grid Layout',
        content: `.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}`,
        explanation: 'CSS Grid creates two-dimensional layouts.',
        exercise: 'Create a 3x3 grid of colored boxes.'
    },
    {
        id: 10,
        title: 'Responsive Design',
        content: `@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}`,
        explanation: 'Media queries make sites responsive to different screen sizes.',
        exercise: 'Make a layout stack on mobile devices.'
    },
    {
        id: 11,
        title: 'JS Variables',
        content: `let name = 'John';
const age = 25;
var oldWay = 'not recommended';`,
        explanation: 'JavaScript uses let, const, and var to declare variables.',
        exercise: 'Create variables for a user profile.'
    },
    {
        id: 12,
        title: 'Functions',
        content: `function greet(name) {
    return 'Hello, ' + name;
}
const result = greet('World');`,
        explanation: 'Functions are reusable blocks of code.',
        exercise: 'Write a function that adds two numbers.'
    },
    {
        id: 13,
        title: 'DOM Manipulation',
        content: `const element = document.querySelector('.class');
element.innerHTML = 'New content';
element.style.color = 'blue';`,
        explanation: 'JavaScript can modify HTML elements dynamically.',
        exercise: 'Change a paragraph\'s text when clicking a button.'
    },
    {
        id: 14,
        title: 'Events',
        content: `button.addEventListener('click', () => {
    console.log('Button clicked!');
});`,
        explanation: 'Events handle user interactions.',
        exercise: 'Create a hover effect on an image.'
    },
    {
        id: 15,
        title: 'Arrays & Objects',
        content: `const array = [1, 2, 3];
const object = {
    name: 'John',
    age: 25
};`,
        explanation: 'Arrays and objects store collections of data.',
        exercise: 'Create an array of user objects.'
    }
];

// DOM Elements
const lessonButtons = document.querySelectorAll('.lesson-btn');
const lessonTitle = document.getElementById('lessonTitle');
const lessonExample = document.getElementById('lessonExample');
const lessonExplanation = document.getElementById('lessonExplanation');
const lessonExercise = document.getElementById('lessonExercise');
const codeEditor = document.getElementById('codeEditor');
const previewBtn = document.getElementById('previewBtn');
const previewSection = document.getElementById('previewSection');
const previewContent = document.getElementById('previewContent');

// Initialize first lesson
updateLesson(1);

// Event Listeners
lessonButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        lessonButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Update lesson content
        updateLesson(parseInt(button.dataset.lesson));
    });
});

previewBtn.addEventListener('click', () => {
    previewSection.classList.toggle('hidden');
    if (!previewSection.classList.contains('hidden')) {
        previewContent.innerHTML = codeEditor.value;
    }
});

// Functions
function updateLesson(lessonId) {
    const lesson = lessons.find(l => l.id === lessonId);
    if (lesson) {
        lessonTitle.textContent = lesson.title;
        lessonExample.textContent = lesson.content;
        lessonExplanation.textContent = lesson.explanation;
        lessonExercise.textContent = lesson.exercise;
        // Reset code editor and preview
        codeEditor.value = '';
        previewSection.classList.add('hidden');
    }
}