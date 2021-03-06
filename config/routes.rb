Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :blogs
    resources :wips
    resources :comments
    resources :collections
    resources :shorts
    mount_devise_token_auth_for 'User', at: 'auth',
    controllers: {
          sessions: 'api/v1/devise_token_auth/sessions',
          registrations: "api/users/registrations",
          passwords: "api/users/passwords"
        } do
          post '/api/users' => 'api/users/registrations#create', as: :sign_up, constraints: {format: /(json)/}
        end
  end
end
