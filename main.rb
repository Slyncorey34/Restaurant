require 'sinatra'

get '/' do
erb :home	
end

get '/menu' do
	erb :menu
end

get '/about' do
	erb :about
end

get '/reservation' do
erb :reservation
end

get '/contact' do
erb :contact
end

get '/layout' do
erb :layout
end

