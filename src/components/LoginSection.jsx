import escritorio from "../assets/escritorio.png";

const LoginSection = () => {
  return (
    <div className="flex min-h-screen">
      {/* Image half */}
      <div className="hidden w-1/2 bg-gray-100 lg:block">
        <img
          src={escritorio}
          alt="Login background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Login form half */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-xl space-y-8 px-4 sm:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">Bem vindo de volta!</h1>
            <p className="text-gray-500  text-lg">
             Coloque suas credenciais para acessar sua conta.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border text-gray-500 border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="nome@email.com"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 text-gray-500 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[#bdce23]"
                >
                  Lembre de mim
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#bdce23] hover:text-[#dff045]"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="gradient-background flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Entrar
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            Não possui uma conta?{" "}
            <a
              href="#"
              className="font-medium text-[#bdce23] hover:text-[#dff045]"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
