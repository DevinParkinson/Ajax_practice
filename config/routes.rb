Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome_form', to: 'welcome#form'

  resources :welcome
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
