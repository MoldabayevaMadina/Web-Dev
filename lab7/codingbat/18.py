def cigar_party(cigars, is_weekend):
  if(40 <= cigars <= 60) or (cigars > 60 and is_weekend):
    return True
  else:
    return False
