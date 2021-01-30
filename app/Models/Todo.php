<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Todo extends Model
{
    use HasFactory;
    protected $table = 'todo';
    protected $fillable = ['titre', 'description', 'date_execution', 'priorite_id'];

    public function priorite() {
        return $this->belongsTo(Priorite::class, 'priorite_id');

    }

}
