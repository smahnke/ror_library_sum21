class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :pages
      t.belongs_to :checkout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
