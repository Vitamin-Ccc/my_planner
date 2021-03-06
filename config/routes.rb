Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    put 'users/avatar', to: 'users#avatar'
    resources :posts
    resources :trackers do
      resources :expenses
    end
  end
end
