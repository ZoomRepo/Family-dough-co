phony: env build test run

env:
	@echo "Setting up environment..."
	@#echo "No environment variables to set."

build: env
	@echo "Building the project..."
	@npm install
	@npm run build

# test: build
# 	@echo "Running tests..."
# 	@# Add test commands here

dev: env
	@echo "Starting development server..."
	@npm install
	@npm run dev