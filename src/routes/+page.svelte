<script>
  import TwitterIcon from '~icons/devicon/twitter';
  import { Button } from 'flowbite-svelte';
  const twitterLink = import.meta.env.VITE_TWT_USERNAME;
  const githubLink=import.meta.env.VITE_GITHUB_URL;
  const hashnodeURL=import.meta.env.VITE_HASHNODE;
  const email=import.meta.env.VITE_MAIL
  </script>
  
  <main>
    <div class="content">
      <h2 class="name">Sundaram</h2>
      <img src="/profile.jpg" alt="Profile picture" class="profile-pic" />
      
      <div class="button-container">
        <a href="https://x.com/sundaramtwts" >
        <Button  color="blue" target="_blank" class="action-button">
          <span class="button-text">Twitter</span>
        </Button>
        </a>
        <a href="https://github.com/Sundaram-2001" >
        <Button  color="green" class="action-button">
          <span class="button-text">Github</span>
        </Button>
        </a>
        <a href="https://hashnode.com/@Sundaram2001">
        <Button  color="purple" class="action-button">
          <span class="button-text">Blog</span>
        </Button>
        </a>
        <a href={`mailto:${email}`}>
        <Button color="red" class="action-button">
          <span class="button-text">Get In Touch!</span>
        </Button>
      </a>
      </div>
      <div class="bio">
        <p>
          I'm a coder with a passion for photography and a sense of humor. When I'm not writing code, you'll find me capturing moments through my lens. I'm always open to collaborations on exciting projects — let's build something amazing together!
        </p>
      </div>
    </div>
  </main>
  
  <style>
    main {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 1rem;
      background-color: #f0f0f0;
    }
  
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
      max-width: 600px;
      width: 100%;
      padding: 2rem;
      background-color: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .name {
      font-size: 3rem;
      font-weight: bold;
      margin: 0;
      width: max-content;
      text-align: center;
    }
  
    .profile-pic {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border: 3px solid white;
    }
  
    .button-container {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.5rem;
    }
  
    .action-button {
      min-width: 140px;
      height: 50px;
      border-radius: 25px !important;
      font-weight: bold !important;
      letter-spacing: 0.5px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      transform-origin: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  
    .action-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
  
    .action-button:active {
      transform: translateY(1px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .button-text {
      font-size: 1.1rem;
      position: relative;
      z-index: 1;
    }
  
    .icons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  
    .icon-wrapper {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s;
    }
  
    .icon-wrapper:hover {
      transform: scale(1.1);
    }
  
    .icon {
      width: 24px;
      height: 24px;
    }
  
    @media (max-width: 768px) {
      .name {
        font-size: 2rem;
      }
  
      .profile-pic {
        width: 120px;
        height: 120px;
      }
  
      .button-container {
        gap: 1rem;
      }
  
      .action-button {
        min-width: calc(50% - 1rem);
        height: 45px;
      }
  
      .button-text {
        font-size: 1rem;
      }
  
      .icons {
        gap: 0.5rem;
      }
  
      .icon-wrapper {
        width: 40px;
        height: 40px;
      }
  
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  </style>