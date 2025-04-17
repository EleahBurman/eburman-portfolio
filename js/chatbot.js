document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const chatbot = document.getElementById('portfolio-chatbot');
  const openChatBtn = document.getElementById('open-chat');
  const minimizeBtn = document.getElementById('minimize-chat');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendMessage');
  
  // Conversation history to track asked questions
  const conversationHistory = [];
  
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
    pythonQuestions: [
      "Tell me about Drag Queen Collector",
      "How does Eleah use Python day-to-day?",
      "How does Eleah use Python at TMHCC?"
    ],
    javascriptQuestions: [
      "Tell me about Budget Buddy",
      "Tell me about Caffeinate Me",
      "Tell me about Bite Buddy",
      "Tell me about Cat Vs Cat Lady",
      "Tell me about Rainbow Words"
    ],
    reactQuestions: [
      "Tell me about Budget Buddy",
      "Tell me about Bite Buddy"
    ],
    apiQuestions: [
      "Github for Skillz Hunter?", 
      "Github for Bite Buddy?", 
      "Why Eleah likes to consume APIs?"
    ],
    fullStackQuestions: [
      "Tell me about Budget Buddy",
      "Tell me about Bite Buddy",
      "Tell me about Caffeinate Me",
      "Tell me about Drag Queen Collector"
    ],
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

  // Initial welcome message
  function displayWelcomeMessage() {
    // Check if there's already content in the chatMessages element
    if (chatMessages.children.length === 0) {
      addMessage("Hi! I can answer questions about Eleah's Software Engineer projects and skills. Try asking or clicking one of the options below:", 'bot');
    }
    
    // Add initial question buttons - removed "Which projects use..." questions
    addQuickQuestionButtons([
      "What languages does Eleah code in?",
      "Which projects use APIs?",
      "What projects are full-stack?",
      "Tell me about Skillz Hunter",
      "Show me all GitHub links"
    ]);
  }
  
  // Call to display welcome message and initial buttons
  displayWelcomeMessage();

  // Add dynamically filtered quick question buttons based on conversation history
  function addFilteredQuickQuestionButtons(category, currentQuestion = '') {
    if (!portfolioData[category]) return;
    
    // Filter out questions that have already been asked or are currently being asked
    const filteredQuestions = portfolioData[category].filter(question => {
      const questionLower = question.toLowerCase();
      // Check if this question is the current one or has been asked before
      return !conversationHistory.some(historyItem => 
        historyItem.includes(questionLower) || 
        questionLower.includes(historyItem)
      ) && questionLower !== currentQuestion.toLowerCase();
    });
    
    if (filteredQuestions.length > 0) {
      setTimeout(() => {
        addQuickQuestionButtons(filteredQuestions);
      }, 600);
    }
  }

  // Add quick question buttons
  function addQuickQuestionButtons(questions) {
    const quickButtonsContainer = document.createElement('div');
    quickButtonsContainer.className = 'quick-buttons-container';
    
    questions.forEach(question => {
      const button = document.createElement('button');
      button.className = 'quick-question-button';
      button.textContent = question;
      button.addEventListener('click', () => {
        // Simulate user typing this question
        addMessage(question, 'user');
        
        // Add question to conversation history
        conversationHistory.push(question.toLowerCase());
        
        // Get and display response
        setTimeout(() => {
          const response = processUserMessage(question);
          addMessage(response, 'bot');
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
      });
      
      quickButtonsContainer.appendChild(button);
    });
    
    // Add the buttons to the chat
    chatMessages.appendChild(quickButtonsContainer);
  }

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

    // Add message to conversation history
    conversationHistory.push(message.toLowerCase());

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

  // Process user message and generate response with follow-up questions
  function processUserMessage(message) {
    message = message.toLowerCase();
    
    // Check for language questions
    if ((message.includes('language') || message.includes('languages') || message.includes('code in')) && !message.includes('favorite')) {
      const response = `Eleah codes in ${portfolioData.languages.join(', ')}. She's also proficient with frameworks like ${portfolioData.frameworks.join(', ')}.`;
      
      // Add follow-up buttons after sending the response
      setTimeout(() => {
        addQuickQuestionButtons([
          "Which projects use Python?",
          "Which projects use JavaScript?",
          "Which projects use Java?",
          "Which projects use React?",
          "Want to hear about Eleah's favorite language?"
        ]);
      }, 600);
      
      return response;
    }

    // Favorite language response
    if (message.toLowerCase().includes('favorite language')) {
      const response = "Eleah especially enjoys using Python for everyday tasks and automation due to its readability and powerful libraries. It's perfect for quick solutions and data analysis!";
      
      // Add Python follow-up buttons
      addFilteredQuickQuestionButtons('pythonQuestions');
      
      return response;
    }
    
    // Check for project questions by language
    if (message.includes('projects') && message.includes('python')) {
      const pythonProjects = portfolioData.projects.filter(p => 
        p.languages.some(l => l.toLowerCase() === 'python')
      );
      let response = `Eleah used Python in: ${pythonProjects.map(p => p.name).join(', ')}. `;
      
      // Add all Python follow-up buttons
      addFilteredQuickQuestionButtons('pythonQuestions');
      
      return response;
    }

    if (message.includes('projects') && message.includes('javascript')) {
      const jsProjects = portfolioData.projects.filter(p => 
        p.languages.some(l => l.toLowerCase() === 'javascript')
      );
      let response = `Eleah's JavaScript projects include: ${jsProjects.map(p => p.name).join(', ')}. JavaScript is the foundation of her frontend development skills.`;
      
      // Add all JavaScript follow-up buttons
      addFilteredQuickQuestionButtons('javascriptQuestions');
      
      return response;
    }

    if (message.includes('projects') && message.includes('react')) {
      const reactProjects = portfolioData.projects.filter(p => 
        p.languages.some(l => l.toLowerCase() === 'react')
      );
      let response = `Eleah's React projects include: ${reactProjects.map(p => p.name).join(', ')}. React is her preferred frontend framework for building interactive UIs.`;
      
      // Add all React follow-up buttons
      addFilteredQuickQuestionButtons('reactQuestions');
      
      return response;
    }
    
    // Check for API projects
    if (message.includes('project') && message.includes('api')) {
      const apiProjects = portfolioData.projects.filter(p => p.features.some(f => f.toLowerCase().includes('api')));
      let response = `Projects that consume APIs include: ${apiProjects.map(p => p.name).join(', ')}. `;
      
      // Add all API follow-up buttons
      addFilteredQuickQuestionButtons('apiQuestions');
      
      return response;
    }
    
    // Check for full-stack projects
    if (message.includes('full-stack') || message.includes('fullstack')) {
      const fullStackProjects = portfolioData.projects.filter(p => 
        (p.languages.some(l => l.toLowerCase() === 'react' || l.toLowerCase() === 'javascript') &&
         (p.languages.some(l => l.toLowerCase() === 'express' || l.toLowerCase() === 'node.js' || l.toLowerCase() === 'mongodb' || l.toLowerCase() === 'django' || l.toLowerCase() === 'postgresql')))
      );
      
      let response = `Eleah's full-stack projects include: ${fullStackProjects.map(p => p.name).join(', ')}. These projects showcase her ability to work with both frontend and backend technologies.`;
      
      // Add all full-stack follow-up buttons
      addFilteredQuickQuestionButtons('fullStackQuestions');
      
      return response;
    }
    
    // Why Eleah likes APIs
    if (message.includes('why') && message.includes('apis')) {
      return "Eleah enjoys working with APIs because they allow her to integrate powerful external services into her applications, enhancing functionality without reinventing the wheel. It also provides valuable real-world data to make her applications more useful!";
    }
    
    // How Eleah uses Python day-to-day
    if ((message.includes('how') || message.includes('day')) && message.includes('python') && !message.toLowerCase().includes('tmhcc')) {
      const response = "Eleah uses Python to solve a spectrum of challenges - from automating simple emails and data analysis to managing databases and building full websites with Django. It's her go-to tool for quickly transforming ideas into functional solutions, whether it's a small script to organize files or a complex web application with multiple features.";
      
      // Add the other Python options as follow-up buttons
      addFilteredQuickQuestionButtons('pythonQuestions', 'How does Eleah use Python day-to-day?');
      
      return response;
    }
    
    // How Eleah uses Python at TMHCC
    if (message.toLowerCase().includes('tmhcc') && message.toLowerCase().includes('python')) {
      const response = "At TMHCC, Eleah uses Python to streamline actuarial workflows by automating data extraction, creating analysis tools, and generating customized reports. She built scripts that reduced hours of manual work to minutes, allowing the team to focus on more valuable insights rather than data processing.";
      
      // Add the other Python options as follow-up buttons
      addFilteredQuickQuestionButtons('pythonQuestions', 'How does Eleah use Python at TMHCC?');
      
      return response;
    }
    
    // Check for GitHub link requests
    if (message.includes('github') || (message.includes('link') && message.includes('all'))) {
      let response = 'Here are Eleah\'s GitHub links:<br>';
      portfolioData.projects.forEach(project => {
        response += `<a href="${project.github}" target="_blank">${project.name}</a><br>`;
      });
      
      // Add follow-up button for main GitHub
      setTimeout(() => {
        addQuickQuestionButtons(["Eleah's GitHub"]);
      }, 600);
      
      return response;
    }
    
    // Eleah's main GitHub
    if (message.includes('eleah') && message.includes('github')) {
      return '<a href="https://github.com/EleahBurman" target="_blank">Visit Eleah\'s GitHub profile to see all her work!</a>';
    }
    
    // GitHub for specific projects
    if (message.toLowerCase().includes('github for skillz hunter')) {
      return `<a href="${portfolioData.projects[0].github}" target="_blank">Check out the Skillz Hunter project on GitHub</a>`;
    }
    
    if (message.toLowerCase().includes('github for bite buddy')) {
      const project = portfolioData.projects.find(p => p.name.toLowerCase() === 'bite buddy');
      return `<a href="${project.github}" target="_blank">Check out the Bite Buddy project on GitHub</a>`;
    }
    
    // Check for Java projects
    if (message.includes('projects') && message.includes('java')) {
      const javaProjects = portfolioData.projects.filter(p => 
        p.languages.some(l => l.toLowerCase() === 'java')
      );
      let response = `Eleah used Java in: ${javaProjects.map(p => p.name).join(', ')}. `;
      
      // Add follow-up button about Skillz Hunter
      setTimeout(() => {
        addQuickQuestionButtons(["Information about Skillz Hunter?"]);
      }, 600);
      
      return response;
    }
    
    // Project-specific responses
    if (message.includes('skillz hunter') || (message.includes('information') && message.includes('skillz hunter'))) {
      const project = portfolioData.projects.find(p => p.name === 'Skillz Hunter');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      return response;
    }
    
    if (message.includes('drag queen collector')) {
      const project = portfolioData.projects.find(p => p.name === 'Drag Queen Collector');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show the other Python options
      addFilteredQuickQuestionButtons('pythonQuestions', 'Tell me about Drag Queen Collector');
      
      return response;
    }
    
    if (message.includes('budget buddy')) {
      const project = portfolioData.projects.find(p => p.name === 'Budget Buddy');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show other JavaScript/full-stack/React projects
      if (portfolioData.javascriptQuestions.includes('Tell me about Budget Buddy')) {
        addFilteredQuickQuestionButtons('javascriptQuestions', 'Tell me about Budget Buddy');
      } else if (portfolioData.reactQuestions.includes('Tell me about Budget Buddy')) {
        addFilteredQuickQuestionButtons('reactQuestions', 'Tell me about Budget Buddy');
      } else if (portfolioData.fullStackQuestions.includes('Tell me about Budget Buddy')) {
        addFilteredQuickQuestionButtons('fullStackQuestions', 'Tell me about Budget Buddy');
      }
      
      return response;
    }
    
    if (message.includes('bite buddy')) {
      const project = portfolioData.projects.find(p => p.name === 'Bite Buddy');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show other JavaScript/full-stack/React projects
      if (portfolioData.javascriptQuestions.includes('Tell me about Bite Buddy')) {
        addFilteredQuickQuestionButtons('javascriptQuestions', 'Tell me about Bite Buddy');
      } else if (portfolioData.reactQuestions.includes('Tell me about Bite Buddy')) {
        addFilteredQuickQuestionButtons('reactQuestions', 'Tell me about Bite Buddy');
      } else if (portfolioData.fullStackQuestions.includes('Tell me about Bite Buddy')) {
        addFilteredQuickQuestionButtons('fullStackQuestions', 'Tell me about Bite Buddy');
      }
      
      return response;
    }
    
    if (message.includes('cat') && message.includes('cat lady')) {
      const project = portfolioData.projects.find(p => p.name === 'Cat Vs Cat Lady');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `This is a fun game where you can play against the computer! `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show other JavaScript projects
      addFilteredQuickQuestionButtons('javascriptQuestions', 'Tell me about Cat Vs Cat Lady');
      
      return response;
    }
    
    if (message.includes('caffeinate me')) {
      const project = portfolioData.projects.find(p => p.name === 'Caffeinate Me');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show other JavaScript/full-stack projects
      if (portfolioData.javascriptQuestions.includes('Tell me about Caffeinate Me')) {
        addFilteredQuickQuestionButtons('javascriptQuestions', 'Tell me about Caffeinate Me');
      } else if (portfolioData.fullStackQuestions.includes('Tell me about Caffeinate Me')) {
        addFilteredQuickQuestionButtons('fullStackQuestions', 'Tell me about Caffeinate Me');
      }
      
      return response;
    }
    
    if (message.includes('rainbow words')) {
      const project = portfolioData.projects.find(p => p.name === 'Rainbow Words');
      let response = `${project.name} is built with ${project.languages.join(', ')}. `;
      response += `Features include: ${project.features.join(', ')}. `;
      response += `<a href="${project.github}" target="_blank">View on GitHub</a>`;
      
      // Show other JavaScript projects
      addFilteredQuickQuestionButtons('javascriptQuestions', 'Tell me about Rainbow Words');
      
      return response;
    }
    
    // Default response
    return `I can tell you about Eleah's coding skills and projects. Try asking about:
    <ul>
      <li>What languages does Eleah code in?</li>
      <li>What projects use Python?</li>
      <li>What projects use JavaScript?</li>
      <li>What projects use Java?</li>
      <li>What projects are full-stack?</li>
      <li>Which projects use APIs?</li>
      <li>Tell me about the Skillz Hunter project</li>
      <li>Show me GitHub links</li>
    </ul>`;
  }
});