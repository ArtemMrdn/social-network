import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qpwVVDL5JxcranO9YRjfs4WG4hliTEh4IA44dKd2zqXcpp72HuV6BfncHV59FQ6NnwQ&usqp=CAU' />
        </div>
        <div>ava+description</div>
        <div>
          My post
          <div>New post</div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
