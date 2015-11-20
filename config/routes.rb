Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create, :show, :update]
    resources :profiles, only: [:update]
    resources :photos, only: [:create, :delete]
    resources :albums, only: [:create, :show]
    resources :posts, only: [:create, :index]
    resources :friend_requests, only: [:create, :update, :delete]
    resources :friends, only: [:index]
  end
end
