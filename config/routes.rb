Rails.application.routes.draw do
  
  get 'welcome/index'
  root "welcome#index"

  resources :users do
    resources :artworks  
  end
  resources :events

  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth'
  end

  
  # mount_devise_token_auth_for 'User', at: 'api/auth'
  
end
