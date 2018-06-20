class CreateWips < ActiveRecord::Migration[5.1]
  def change
    create_table :wips do |t|
      t.string :title
      t.string :content
      t.string :draft
      t.integer :percent
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
