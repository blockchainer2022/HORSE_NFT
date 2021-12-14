const Index = () => {
  return (
    <footer className="text-center py-20 bg-primary-400">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap">
          <h6 className="text-3xl uppercase">Horse game</h6>
          <div className="grid grid-flow-col gap-4 my-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-white text-primary-400 cursor-pointer">
              <i class="fab fa-telegram"></i>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-white text-primary-400 cursor-pointer">
              <i class="fab fa-discord"></i>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-white text-primary-400 cursor-pointer">
              <i class="fab fa-instagram"></i>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center text-xl bg-white text-primary-400 cursor-pointer">
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="font-serif font-bold text-center text-white pt-10">
          © Copyright 2021 Horse Game
        </div>
      </div>
    </footer>
  );
};

export default Index;
