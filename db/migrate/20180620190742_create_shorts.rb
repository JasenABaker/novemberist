class CreateShorts < ActiveRecord::Migration[5.1]
  def change
    create_table :shorts do |t|
      t.string :title
      t.string :content
      t.references :collection, foreign_key: true

      t.timestamps
    end
  end
end
