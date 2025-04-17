document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const chatbot = document.getElementById('portfolio-chatbot');
  const openChatBtn = document.getElementById('open-chat');
  const minimizeBtn = document.getElementById('minimize-chat');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendMessage');
  
  // Log to check if elements are found
  console.log("Chatbot:", chatbot);
  console.log("Open chat button:", openChatBtn);
  console.log("Minimize button:", minimizeBtn);

  // Portfolio data for the chatbot to use
  const portfolioData = {
    languages: ['JavaScript', 'Python', 'Java', 'HTML', 'CSS'],
    frameworks: ['React', 'Node.js', 'Express', 'Django'],
    databases: ['MongoDB', 'PostgreSQL'],
    tools: ['Docker', 'Git', 'VS Code', 'AWS', 'Azure', 'JWT', 'MUI', 'Vite'],
    projects: [
      {
        name: 'Skillz Hunter',
        languages: ['Java'],
        features: ['API consumption', 'Dependency Injection', 'Observer Pattern', 'Levenshtein Distance Algorithm', 'Salary Visualization'],
        github: 'https://github.com/Sp25-CS5004-Online-Lionelle/final-project-group-2/'
      },
      {
        name: 'Budget Buddy',
        languages: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        features: ['Currency Selection', 'Budget Tracking', 'Expense Management', 'JWT Authentication'],
        github: 'https://github.com/EleahBurman/budget-app'
      },
      {
        name: 'Drag Queen Collector',
        languages: ['Python', 'Django', 'PostgreSQL'],
        features: ['AWS Integration', 'Collection Management', 'Scheduling System'],
        github: 'https://github.com/EleahBurman/drag-queen-collector'
      },
      {
        name: 'Caffeinate Me',
        languages: ['JavaScript', 'Express', 'MongoDB', 'Node.js'],
        features: ['Google OAuth', 'Cafe Reviews', 'Profile Customization'],
        github: 'https://github.com/EleahBurman/caffeinate-me'
      },
      {
        name: 'Bite Buddy',
        languages: ['JavaScript', 'React', 'MongoDB', 'Node.js'],
        features: ['API Consumption', 'Recipe Boards', 'Allergy Specifications'],
        github: 'https://github.com/EleahBurman/bite-buddy-front-end'
      },
      {
        name: 'Cat Vs Cat Lady',
        languages: ['JavaScript', 'HTML', 'CSS'],
        features: ['Game Logic', 'Animation Effects'],
        github: 'https://github.com/EleahBurman/cat-catlady'
      },
      {
        name: 'Rainbow Words',
        languages: ['JavaScript', 'HTML', 'CSS'],
        features: ['Word Search Game', 'Achievement System'],
        github: 'https://github.com/EleahBurman/rainbowwords'
      }
    ]
  };

  // Add quick question buttons
  function addQuickQuestionButtons() {
    const quickQuestions = [
      "What languages does Eleah code in?",
      "Which projects use APIs?",
      "Tell me about Skillz Hunter",
      "Which projects use Java?",
      "Show me all GitHub links"
    ];
    
    const quickButtonsContainer = document.createElement('div');
    quickButtonsContainer.className = 'quick-buttons-container';
    
    quickQuestions.forEach(question => {
      const button = document.createElement('button');
      button.className = 'quick-question-button';
      button.textContent = question;
      button.addEventListener('click', () => {
        // Simulate user typing this question
        addMessage(question, 'user');
        
        // Get and display response
        setTimeout(() => {
          const response = processUserMessage(question);
          addMessage(response, 'bot');
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
      });
      
      quickButtonsContainer.appendChild(button);
    });
    
    // Add the buttons after the initial welcome message
    chatMessages.appendChild(quickButtonsContainer);
  }
  
  // Call this function to add the quick question buttons
  addQuickQuestionButtons();

  // Toggle chatbot visibility with more robust error handling
  if (openChatBtn) {
    openChatBtn.addEventListener('click', function() {
      console.log("Open chat clicked");
      if (chatbot) {
        chatbot.style.display = 'flex';
        openChatBtn.style.display = 'none';
      }
    });
  }

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', function() {
      console.log("Minimize clicked");
      if (chatbot) {
        chatbot.style.display = 'none';
        if (openChatBtn) openChatBtn.style.display = 'flex';
      }
    });
  }

  // Handle sending messages
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';

    // Process the message and get a response
    const response = processUserMessage(message);
    
    // Add bot response with a slight delay to seem more natural
    setTimeout(() => {
      addMessage(response, 'bot');
      // Scroll to the bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
  }

  // Send message on button click
  if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
  }

  // Send message on Enter key
  if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }

  // Add a message to the chat
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    // Add avatar for bot messages
    if (sender === 'bot') {
      const messageContent = document.createElement('div');
      messageContent.className = 'message-content';
      messageContent.innerHTML = text;
      
      const avatarDiv = document.createElement('div');
      avatarDiv.className = 'bot-avatar';
      
      messageDiv.appendChild(avatarDiv);
      messageDiv.appendChild(messageContent);
    } else {
      // For user messages, just add the text
      messageDiv.innerHTML = text;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Process user message and generate response
  function processUserMessage(message) {
    message = message.toLowerCase();
    
    // Check for language questions
    if (message.includes('language') || message.includes('languages') || message.includes('code in')) {
      return `Eleah codes in ${portfolioData.languages.join(', ')}. She's also proficient with frameworks like ${portfolioData.frameworks.join(', ')}.`;
    }
    
    // Check for project questions
    if (message.includes('project') && message.includes('api')) {
      const apiProjects = portfolioData.projects.filter(p => p.features.some(f => f.toLowerCase().includes('api')));
      let response = `Projects that consume APIs include: ${apiProjects.map(p => p.name).join(', ')}. `;
      response += `Would you like to see the GitHub links for these projects?`;
      return response;
    }
    
    // Check for GitHub link requests
    if (message.includes('github') || message.includes('link') || message.includes('links')) {
      let response = 'Here are Eleah\'s GitHub links:<br>';
      portfolioData.projects.forEach(project => {
        response += `<a href="${project.github}" target="_blank">${project.name}</a><br>`;
      });
      return response;
    }
    
    // Check for specific language questions
    for (const lang of portfolioData.languages) {
      if (message.includes(lang.toLowerCase())) {
        const projectsWithLang = portfolioData.projects.filter(p => 
          p.languages.some(l => l.toLowerCase() === lang.toLowerCase())
        );
        if (projectsWithLang.length > 0) {
          return `Eleah used ${lang} in these projects: ${projectsWithLang.map(p => p.name).join(', ')}. Would you like to know more about any of these projects?`;
        } else {
          return `Eleah knows ${lang} but it's not featured in the displayed projects.`;
        }
      }
    }
    
    // Check for specific project information
    for (const project of portfolioData.projects) {
      if (message.includes(project.name.toLowerCase())) {
        let response = `${project.name} is built with ${project.languages.join(', ')}. `;
        response += `Features include: ${project.features.join(', ')}. `;
        response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
        return response;
      }
    }
    
    // Default response
    return `I can tell you about Eleah's coding skills and projects. Try asking about:
    <ul>
      <li>What languages does Eleah code in?</li>
      <li>What projects use Python/JavaScript/Java?</li>
      <li>Which projects use APIs?</li>
      <li>Tell me about the Skillz Hunter project</li>
      <li>Show me GitHub links</li>
    </ul>`;
  }
});