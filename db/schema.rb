# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_03_000123) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "mission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mission_id"], name: "index_comments_on_mission_id"
    t.index ["player_id"], name: "index_comments_on_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "title"
    t.string "content"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mission_parties", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "mission_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mission_id"], name: "index_mission_parties_on_mission_id"
    t.index ["player_id"], name: "index_mission_parties_on_player_id"
  end

  create_table "missions", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_missions_on_game_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "alias"
    t.string "avatar"
    t.string "username"
    t.string "password_digest"
    t.integer "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "content"
    t.bigint "game_id"
    t.bigint "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_posts_on_game_id"
    t.index ["player_id"], name: "index_posts_on_player_id"
  end

  add_foreign_key "mission_parties", "missions"
  add_foreign_key "mission_parties", "players"
end
