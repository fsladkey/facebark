Rails.application.routes.draw do
  get 'static_pages/root'

  root to: "static_pages#root"

  resource :session

  resources :users
end
