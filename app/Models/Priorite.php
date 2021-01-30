<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Priorite extends Model
{
    use HasFactory;
    protected $table = 'priorite';
    protected $fillable = ['priorite'];

    public function todo() {
        return $this->hasMany(Todo::class, 'priorite_id');

    }

}
