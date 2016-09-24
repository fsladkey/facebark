Rails.application.routes.draw do
  root to: "static_pages#root"
  post 'pusher/auth'
  resource :session, only: [:create]
  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create, :show, :update]
    resources :profiles, only: [:update]
    resources :photos, only: [:create, :delete, :show]
    resources :albums, only: [:create, :show]
    resources :friendships, only: [:destroy]
    resources :friend_requests, only: [:create, :update, :destroy]
    resources :feed, only: [:index]
    resources :notifications, only: [:update]
    resources :messages, only: [:create]
    resources :conversations, only: [:index]

    resources :photos, only: [:create, :delete, :show] do
      member do
        post "lick"
        delete "unlick"
      end
    end

    resources :posts, only: [:create, :index, :show] do
      member do
        post "lick"
        delete "unlick"
      end
    end


    resources :comments, only: [:create, :update, :destroy] do
      member do
        post "lick"
        delete "unlick"
      end
    end

  end
end
